/* Textos, cores e a posição de cada base sobre a foto.
   As bases são independentes: não há caminho ligando uma à outra.
   px, py: centro do pino, no mesmo sistema da foto (1024 x 780).
   etiqueta: "acima" ou "abaixo" — lado da marca de concluída. */

const VIEW = { w: 1024, h: 768 };

const MAPA = {
  arquivo: "mapa-local.jpg",
  w: 1024,
  h: 780,
};

const EVENTO = {
  nome: "ELOP",
  lead: "Toque em cada base para ver a tarefa.",
};

const BASES = [
  {
    id: "R",
    titulo: "Base R",
    apelido: "Local de Revista",
    duracao: "1h30",
    resumo: "Ponto junto às árvores menores do lado esquerdo.",
    fazer: "Confirmem os nomes da equipe e leiam as regras desta base.",
    cor: "#c62828",
    fundo: "#ffcdd2",
    px: 520,
    py: 400,
    etiqueta: "acima",
  },
  {
    id: "A",
    titulo: "Base A",
    apelido: "APH Tático",
    duracao: "1h30",
    resumo: "No lado direito superior, em cima das árvores.",
    fazer: "Encontrem três detalhes do lugar ligados ao tema da atividade e anotem no cartão da base.",
    dinamica: {
      titulo: "Dinâmica",
      itens: [
        "Despacho de ocorrência de veículo caráter geral",
        "Após a chegada da US um policial será ferido por arma de fogo",
        "A equipe deverá realizar a aproximação e o primeiro atendimento ao policial",
        "Posteriormente procederá na preservação do local até a chegada da Perícia",
      ],
      docs: [
        {
          rotulo: "5.05.00 — Deslocamento de viatura em patrulhamento",
          href: "docs/Processo-5.05.00-Deslocamento-de-Vtr-em-Patrulhamento.pdf",
        },
        {
          rotulo: "4.01.00 — Acompanhamento e Cerco",
          href: "docs/Processo-4.01.00_Acompanhamento_e_Cerco_A.pdf",
        },
        {
          rotulo: "5.19.00 — Resgate tático ao PM ferido",
          href: "docs/Processo-5.19.00-Resgate-Tatico-ao-PM-Ferido.pdf",
        },
        {
          rotulo: "2.05.00 — Preservação de local de crime",
          href: "docs/Processo-2.05.00-Preservacao-Local-de-Crime_A.pdf",
        },
      ],
    },
    cor: "#ef6c00",
    fundo: "#ffe0b2",
    px: 760,
    py: 120,
    etiqueta: "abaixo",
  },
  {
    id: "B",
    titulo: "Base B",
    apelido: "Violência doméstica",
    duracao: "1h30",
    resumo: "Na parte de cima, junto ao muro do lado esquerdo.",
    fazer: "Leiam o enunciado, combinem uma estratégia e executem. Se travarem, chamem o monitor.",
    dinamica: {
      titulo: "Dinâmica",
      itens: [
        "Despacho de ocorrência de C04",
        "Apoio a US durante o atendimento",
        "Constatação da natureza correta",
        "Adotar as providências necessárias",
      ],
      docs: [
        {
          rotulo: "2.09.00 — Violência doméstica e sexual (Não se cale)",
          href: "docs/Processo-2.09.00-ViolDomSex_nao-se-cale_FEV25.pdf",
        },
      ],
    },
    cor: "#7cb342",
    fundo: "#dcedc8",
    px: 250,
    py: 190,
    etiqueta: "abaixo",
  },
  {
    id: "C",
    titulo: "Base C",
    apelido: "Ocorrência com refém subjugado",
    duracao: "1h30",
    resumo: "No vão entre os dois prédios do lado esquerdo inferior.",
    fazer: "Comparem as anotações e fechem, juntos, uma resposta única.",
    dinamica: {
      titulo: "Dinâmica",
      itens: [
        "Despacho de ocorrência de C04",
        "Apoio a chegada da US o indivíduo toma a mulher como refém com arma branca",
        "Constatação da natureza correta",
        "Adotar as providências necessárias",
      ],
      docs: [
        {
          rotulo: "5.15.00 — Defesa contra instrumentos usados como armas brancas",
          href: "docs/Processo-5.15.00-Defesa-armas-brancas.pdf",
        },
      ],
    },
    cor: "#ad1457",
    fundo: "#f8bbd0",
    px: 200,
    py: 575,
    etiqueta: "acima",
  },
  {
    id: "D",
    titulo: "Base D",
    apelido: "MDIP",
    duracao: "1h30",
    resumo: "Em cima do barracão com o letreiro Escola Superior de Sargentos.",
    fazer: "Entreguem o que produziram e aguardem a orientação final.",
    dinamica: {
      titulo: "Dinâmica",
      itens: [
        "Ocorrência de MDIP após acompanhamento a veículo caráter geral, envolvendo equipe subordinada ao CGP",
        "Apoio a US e coordenação da ocorrência",
        "Gerenciamento no sítio dos fatos",
        "Adotar as providências necessárias",
      ],
      docs: [
        {
          rotulo: "4.01.00 — Acompanhamento e Cerco",
          href: "docs/Processo-4.01.00_Acompanhamento_e_Cerco.pdf",
        },
        {
          rotulo: "1.02.00 — Abordagem policial (viatura 4 rodas)",
          href: "docs/Processo-1.02.00-AbordagemPolVtr4Rodas.pdf",
        },
        {
          rotulo: "2.05.00 — Preservação de local de crime",
          href: "docs/Processo-2.05.00-Preservacao-Local-de-Crime.pdf",
        },
      ],
    },
    cor: "#6a1b9a",
    fundo: "#e1bee7",
    px: 660,
    py: 555,
    etiqueta: "acima",
  },
  {
    id: "E",
    titulo: "Base E",
    apelido: "Desinteligência (crime militar)",
    duracao: "1h30",
    resumo: "Entre as bases A e F, no lado direito do mapa.",
    fazer: "Leiam a tarefa da base e registrem a resposta da equipe.",
    dinamica: {
      titulo: "Dinâmica",
      itens: [
        "A equipe do CGP (avaliado na base) será informado via rede rádio através do COPOM, que está ocorrendo uma desinteligência em um comércio",
        "E determinará que uma US realize o primeiro atendimento",
        "A US identificará a complexidade da ocorrência e logo solicitará o apoio do CGP",
        "Ele, por sua vez, irá adotar as providências necessárias",
      ],
      docs: [
        {
          rotulo: "2.02.00 — Desinteligência",
          href: "docs/Processo-2.02.00-Desinteligencia_1.pdf",
        },
      ],
    },
    cor: "#00695c",
    fundo: "#b2dfdb",
    px: 710,
    py: 210,
    etiqueta: "abaixo",
  },
  {
    id: "F",
    titulo: "Base F",
    apelido: "Sinistro de Trânsito com vítima envolvendo veículo oficial",
    duracao: "1h30",
    resumo: "Parada no lado direito do campus, junto à área aberta.",
    fazer: "Leiam a tarefa da base e registrem a resposta da equipe.",
    dinamica: {
      titulo: "Dinâmica",
      itens: [
        "Atropelamento de civil durante patrulhamento motorizado",
        "Vítima sofreu lesões corporais ao atravessar correndo pela faixa de pedestres",
        "Testemunhas relataram possível subtração de aparelho celular antes do atropelamento",
        "Acionamento do CGP “F” para apoio e providências operacionais",
        "Permanência da equipe no local para esclarecimento dos fatos",
      ],
      docs: [
        {
          rotulo: "3.01.00 — Acidente de trânsito",
          href: "docs/Processo-3.01.00-Acidente-de-Transito.pdf",
        },
      ],
    },
    cor: "#283593",
    fundo: "#c5cae9",
    px: 740,
    py: 380,
    etiqueta: "abaixo",
  },
];

/* Agenda de cada equipe: composição + base + horário.
   Preencha as demais equipes no mesmo formato da Equipe 01. */
const EQUIPES = [
  {
    id: "01",
    nome: "Equipe 01",
    composicao: "1º, 2º e 3º Pel",
    agenda: [
      { base: "A", hora: "13h30" },
      { base: "F", hora: "14h45" },
      { base: "E", hora: "16h00" },
      { base: "D", hora: "17h45" },
      { base: "C", hora: "19h00" },
      { base: "B", hora: "20h15" },
    ],
  },
  {
    id: "02",
    nome: "Equipe 02",
    composicao: "4º, 5º e 6º Pel",
    agenda: [
      { base: "B", hora: "13h30" },
      { base: "A", hora: "14h45" },
      { base: "F", hora: "16h00" },
      { base: "E", hora: "17h45" },
      { base: "D", hora: "19h00" },
      { base: "C", hora: "20h15" },
    ],
  },
  {
    id: "03",
    nome: "Equipe 03",
    composicao: "7º, 8º e 9º Pel",
    agenda: [
      { base: "C", hora: "13h30" },
      { base: "B", hora: "14h45" },
      { base: "A", hora: "16h00" },
      { base: "F", hora: "17h45" },
      { base: "E", hora: "19h00" },
      { base: "D", hora: "20h15" },
    ],
  },
  {
    id: "04",
    nome: "Equipe 04",
    composicao: "10º, 11º e 12º Pel",
    agenda: [
      { base: "D", hora: "13h30" },
      { base: "C", hora: "14h45" },
      { base: "B", hora: "16h00" },
      { base: "A", hora: "17h45" },
      { base: "F", hora: "19h00" },
      { base: "E", hora: "20h15" },
    ],
  },
  {
    id: "05",
    nome: "Equipe 05",
    composicao: "13º, 14º e 15º Pel",
    agenda: [
      { base: "E", hora: "13h30" },
      { base: "D", hora: "14h45" },
      { base: "C", hora: "16h00" },
      { base: "B", hora: "17h45" },
      { base: "A", hora: "19h00" },
      { base: "F", hora: "20h15" },
    ],
  },
  {
    id: "06",
    nome: "Equipe 06",
    composicao: "16º e 17º Pel",
    agenda: [
      { base: "F", hora: "13h30" },
      { base: "E", hora: "14h45" },
      { base: "D", hora: "16h00" },
      { base: "C", hora: "17h45" },
      { base: "B", hora: "19h00" },
      { base: "A", hora: "20h15" },
    ],
  },
];
