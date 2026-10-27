(function () {
  "use strict";

  const ns = "http://www.w3.org/2000/svg";
  const CHAVE = "elop-mapa-v1";
  const DUPLO = 400;

  const $ = (id) => document.getElementById(id);

  let atual = 0;
  let selecionada = 0;
  let concluidas = new Set();
  let toque = { id: 0, em: 0 };
  let pronto = false;

  function svg(nome, attrs) {
    const no = document.createElementNS(ns, nome);
    Object.entries(attrs || {}).forEach(([chave, valor]) => {
      if (valor != null) no.setAttribute(chave, String(valor));
    });
    return no;
  }

  function el(tag, attrs, filhos) {
    const no = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([chave, valor]) => {
      if (chave === "class") no.className = valor;
      else if (chave === "disabled") no.disabled = Boolean(valor);
      else no.setAttribute(chave, String(valor));
    });
    (filhos || []).forEach((filho) => {
      if (filho == null || filho === false) return;
      no.append(filho);
    });
    return no;
  }

  function texto(no, valor) {
    if (no.textContent !== valor) no.textContent = valor;
  }

  function basePorId(id) {
    return BASES.find((base) => base.id === id) || null;
  }

  function indice(id) {
    return BASES.findIndex((base) => base.id === id);
  }

  function idValido(id) {
    return indice(id) !== -1;
  }

  function ler() {
    const primeira = BASES[0].id;
    const vazio = { atual: primeira, selecionada: primeira, concluidas: new Set() };
    try {
      const bruto = localStorage.getItem(CHAVE);
      if (!bruto) return vazio;
      const dado = JSON.parse(bruto);
      return {
        atual: idValido(dado.atual) ? dado.atual : primeira,
        selecionada: idValido(dado.selecionada) ? dado.selecionada : primeira,
        concluidas: new Set((dado.concluidas || []).filter(idValido)),
      };
    } catch (erro) {
      return vazio;
    }
  }

  function salvar() {
    if (!pronto) return;
    try {
      localStorage.setItem(CHAVE, JSON.stringify({
        atual,
        selecionada,
        concluidas: [...concluidas],
      }));
    } catch (erro) {
      /* O mapa segue funcionando nesta visita se o navegador bloquear o armazenamento. */
    }
  }

  function idDoHash() {
    const encontrado = /^#base-([a-z0-9]+)$/i.exec(location.hash || "");
    if (!encontrado) return null;
    const id = encontrado[1].toUpperCase();
    return idValido(id) ? id : null;
  }

  function definirHash(id) {
    const hash = "#base-" + id;
    if (location.hash !== hash) history.replaceState(null, "", hash);
  }

  function montarZona(base) {
    const grupo = svg("g", { class: "zona", "data-id": base.id });
    grupo.style.setProperty("--cor", base.cor);
    grupo.append(svg("circle", {
      class: "zona-rect",
      cx: base.px,
      cy: base.py,
      r: 44,
      fill: base.fundo,
    }));
    return grupo;
  }

  function montarPino(base) {
    const grupo = svg("g", {
      class: "pin",
      "data-id": base.id,
      role: "button",
      tabindex: "0",
    });
    const paraDentro = base.etiqueta === "abaixo" ? 1 : -1;
    const ok = svg("g", { class: "pin-ok" });
    const okX = base.px + 30;
    const okY = base.py + 10 * paraDentro;
    ok.append(svg("circle", { cx: okX, cy: okY, r: 10, fill: "#243328" }));
    const visto = svg("text", {
      x: okX,
      y: okY + 1,
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
    visto.textContent = "✓";
    ok.append(visto);

    grupo.append(
      svg("circle", { class: "pin-toque", cx: base.px, cy: base.py, r: 48 }),
      svg("circle", { class: "pin-anel", cx: base.px, cy: base.py, r: 32 }),
      svg("circle", { class: "pin-circulo", cx: base.px, cy: base.py, r: 24, fill: base.cor }),
      vistoNumero(base),
      ok
    );
    return grupo;
  }

  function vistoNumero(base) {
    const numero = svg("text", {
      class: "pin-numero",
      x: base.px,
      y: base.py + 1,
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      "font-size": 20,
    });
    numero.textContent = String(base.id);
    return numero;
  }

  function montarMapa() {
    $("mapa").setAttribute("viewBox", "0 0 " + VIEW.w + " " + VIEW.h);
    const foto = $("foto");
    if (foto && typeof MAPA !== "undefined") {
      foto.setAttribute("href", MAPA.arquivo);
      foto.setAttributeNS("http://www.w3.org/1999/xlink", "href", MAPA.arquivo);
      foto.setAttribute("width", MAPA.w);
      foto.setAttribute("height", MAPA.h);
    }

    const zonas = $("zonas");
    const pinos = $("pins");
    zonas.replaceChildren();
    pinos.replaceChildren();
    BASES.forEach((base) => {
      zonas.append(montarZona(base));
      pinos.append(montarPino(base));
    });
  }

  function atualizarClasses() {
    BASES.forEach((base) => {
      const aqui = base.id === atual;
      const sel = base.id === selecionada;
      const feita = concluidas.has(base.id);
      document.querySelectorAll('[data-id="' + base.id + '"]').forEach((no) => {
        if (!no.classList.contains("zona") && !no.classList.contains("pin")) return;
        no.classList.toggle("is-selecionada", sel);
        no.classList.toggle("is-concluida", feita);
      });
      const pino = document.querySelector('#pins .pin[data-id="' + base.id + '"]');
      if (!pino) return;
      pino.setAttribute("aria-current", aqui ? "true" : "false");
      pino.setAttribute("aria-pressed", sel ? "true" : "false");
      const partes = [base.titulo, base.apelido];
      if (feita) partes.push("concluída");
      if (sel) partes.push("aberta");
      pino.setAttribute("aria-label", partes.join(", "));
    });
  }

  function renderStatus() {
    const aqui = basePorId(atual);
    const aberta = basePorId(selecionada);
    if (!aqui || !aberta) return;
    const frase = aberta.titulo + " · " + aberta.apelido;
    texto($("status"), frase);
    document.title = aberta.titulo + " · " + EVENTO.nome;
  }

  function renderPainel() {
    const base = basePorId(selecionada);
    const painel = $("painel");
    if (!base) return;
    painel.style.setProperty("--cor", base.cor);
    painel.replaceChildren();
    painel.append(
      el("p", { class: "painel-kicker" }, [base.titulo]),
      el("h3", { id: "painel-titulo" }, [base.apelido])
    );
  }

  function pintar(opcoes) {
    const opts = opcoes || {};
    atualizarClasses();
    renderStatus();
    renderPainel();
    salvar();
  }

  let abertoEm = 0;

  function abrirPopup() {
    const popup = $("popup");
    if (!popup || !popup.hidden) return;
    popup.hidden = false;
    abertoEm = performance.now();
    document.body.classList.add("popup-aberto");
    const fechar = $("fechar");
    if (fechar) fechar.focus();
  }

  function fecharPopup() {
    const popup = $("popup");
    if (!popup || popup.hidden) return;
    popup.hidden = true;
    if ($("popup-equipe") && $("popup-equipe").hidden) {
      document.body.classList.remove("popup-aberto");
    }
    const pino = document.querySelector('#pins .pin[data-id="' + selecionada + '"]');
    if (pino) pino.focus();
  }

  function equipePorId(id) {
    if (typeof EQUIPES === "undefined") return null;
    return EQUIPES.find((equipe) => equipe.id === id) || null;
  }

  function renderAgenda(equipe) {
    const lista = $("agenda-lista");
    const titulo = $("equipe-titulo");
    const composicao = $("equipe-composicao");
    if (!lista || !titulo || !equipe) return;
    texto(titulo, equipe.nome);
    if (composicao) texto(composicao, equipe.composicao || "");
    lista.replaceChildren();

    if (!equipe.agenda || !equipe.agenda.length) {
      lista.append(el("li", {}, [
        el("p", { class: "agenda-vazia" }, ["A agenda desta equipe ainda não foi definida."]),
      ]));
      return;
    }

    equipe.agenda.forEach((item) => {
      const base = basePorId(item.base);
      const botao = el("button", {
        type: "button",
        class: "agenda-item",
        "data-base": item.base,
      });
      if (base) botao.style.setProperty("--cor", base.cor);
      botao.append(
        el("span", { class: "agenda-letra" }, [item.base]),
        el("span", { class: "agenda-hora" }, [item.hora]),
        el("span", {}, [
          el("span", { class: "agenda-base" }, [base ? base.titulo : "Base " + item.base]),
          el("span", { class: "agenda-nome" }, [base ? base.apelido : ""]),
        ])
      );
      lista.append(el("li", {}, [botao]));
    });
  }

  let abertoEquipeEm = 0;

  function abrirPopupEquipe(id) {
    const equipe = equipePorId(id);
    if (!equipe) return;
    renderAgenda(equipe);
    const popup = $("popup-equipe");
    if (!popup) return;
    popup.hidden = false;
    abertoEquipeEm = performance.now();
    document.body.classList.add("popup-aberto");
    const fechar = $("fechar-equipe");
    if (fechar) fechar.focus();
  }

  function fecharPopupEquipe() {
    const popup = $("popup-equipe");
    if (!popup || popup.hidden) return;
    popup.hidden = true;
    if ($("popup") && $("popup").hidden) {
      document.body.classList.remove("popup-aberto");
    }
  }

  function selecionar(id, origem) {
    if (!idValido(id)) return;
    selecionada = id;
    definirHash(id);
    pintar();
    if (origem === "mapa") abrirPopup();
  }

  function estarAqui(id) {
    if (!idValido(id)) return;
    atual = id;
    selecionada = id;
    definirHash(id);
    pintar();
  }

  function alternarConcluida(id) {
    if (!idValido(id)) return;
    if (concluidas.has(id)) concluidas.delete(id);
    else concluidas.add(id);
    pintar();
  }

  function aoAtivar(id, origem) {
    const agora = performance.now();
    if (toque.id === id && agora - toque.em < DUPLO) {
      toque.em = 0;
      estarAqui(id);
      return;
    }
    toque = { id, em: agora };
    selecionar(id, origem);
  }

  function mover(id, delta, origem) {
    const i = indice(id);
    if (i < 0) return;
    const proxima = BASES[(i + delta + BASES.length) % BASES.length];
    selecionar(proxima.id, origem);
    const seletor = '#pins .pin[data-id="' + proxima.id + '"]';
    const no = document.querySelector(seletor);
    if (no) no.focus();
  }

  function teclaDeSeta(evento, id, origem) {
    if (evento.key === "ArrowRight" || evento.key === "ArrowDown") {
      evento.preventDefault();
      mover(id, 1, origem);
    } else if (evento.key === "ArrowLeft" || evento.key === "ArrowUp") {
      evento.preventDefault();
      mover(id, -1, origem);
    }
  }

  function ligar() {
    $("zonas").addEventListener("click", (evento) => {
      const zona = evento.target.closest(".zona");
      if (zona) aoAtivar(zona.dataset.id, "mapa");
    });

    $("pins").addEventListener("click", (evento) => {
      const pino = evento.target.closest(".pin");
      if (pino) aoAtivar(pino.dataset.id, "mapa");
    });

    $("pins").addEventListener("keydown", (evento) => {
      const pino = evento.target.closest(".pin");
      if (!pino) return;
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        aoAtivar(pino.dataset.id, "mapa");
      } else {
        teclaDeSeta(evento, pino.dataset.id, "mapa");
      }
    });

    $("fechar").addEventListener("click", fecharPopup);
    $("popup-fundo").addEventListener("click", () => {
      if (performance.now() - abertoEm < 450) return;
      fecharPopup();
    });
    document.addEventListener("keydown", (evento) => {
      if (evento.key !== "Escape") return;
      if ($("popup-equipe") && !$("popup-equipe").hidden) fecharPopupEquipe();
      else fecharPopup();
    });

    window.addEventListener("hashchange", () => {
      const id = idDoHash();
      if (id && id !== selecionada) selecionar(id, "mapa");
    });

    const equipes = document.querySelector(".equipes");
    if (equipes) {
      equipes.addEventListener("click", (evento) => {
        const botao = evento.target.closest(".equipe");
        if (!botao) return;
        equipes.querySelectorAll(".equipe").forEach((item) => {
          item.classList.toggle("is-ativa", item === botao);
        });
        abrirPopupEquipe(botao.dataset.equipe);
      });
    }

    $("fechar-equipe").addEventListener("click", fecharPopupEquipe);
    $("popup-equipe-fundo").addEventListener("click", () => {
      if (performance.now() - abertoEquipeEm < 450) return;
      fecharPopupEquipe();
    });

    $("agenda-lista").addEventListener("click", (evento) => {
      const item = evento.target.closest("[data-base]");
      if (!item) return;
      fecharPopupEquipe();
      selecionar(item.dataset.base, "mapa");
    });
  }

  function iniciar() {
    if (typeof BASES === "undefined" || !BASES.length || typeof EVENTO === "undefined") {
      texto($("painel").querySelector(".resumo") || $("painel"), "Não foi possível ler as bases.");
      return;
    }

    texto($("nome"), EVENTO.nome);
    texto($("lead"), EVENTO.lead);

    const salvo = ler();
    atual = salvo.atual;
    selecionada = idDoHash() || salvo.selecionada;
    concluidas = salvo.concluidas;

    montarMapa();
    ligar();
    definirHash(selecionada);
    pronto = true;
    pintar();

    $("status").setAttribute("aria-live", "polite");
  }

  iniciar();
}());
