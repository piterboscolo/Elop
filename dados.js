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
    cor: "#1565c0",
    fundo: "#bbdefb",
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
      { base: "A", hora: "14h00" },
      { base: "F", hora: "15h15" },
      { base: "E", hora: "16h30" },
      { base: "D", hora: "18h15" },
      { base: "C", hora: "19h30" },
      { base: "D", hora: "20h45" },
    ],
  },
  {
    id: "02",
    nome: "Equipe 02",
    composicao: "4º, 5º e 6º Pel",
    agenda: [
      { base: "B", hora: "14h00" },
      { base: "A", hora: "15h15" },
      { base: "F", hora: "16h30" },
      { base: "E", hora: "18h15" },
      { base: "D", hora: "19h30" },
      { base: "C", hora: "20h45" },
    ],
  },
  {
    id: "03",
    nome: "Equipe 03",
    composicao: "7º, 8º e 9º Pel",
    agenda: [
      { base: "C", hora: "14h00" },
      { base: "B", hora: "15h15" },
      { base: "A", hora: "16h30" },
      { base: "F", hora: "18h15" },
      { base: "E", hora: "19h30" },
      { base: "D", hora: "20h45" },
    ],
  },
  {
    id: "04",
    nome: "Equipe 04",
    composicao: "10º, 11º e 12º Pel",
    agenda: [
      { base: "D", hora: "14h00" },
      { base: "C", hora: "15h15" },
      { base: "B", hora: "16h30" },
      { base: "A", hora: "18h15" },
      { base: "F", hora: "19h30" },
      { base: "E", hora: "20h45" },
    ],
  },
  {
    id: "05",
    nome: "Equipe 05",
    composicao: "13º, 14º e 15º Pel",
    agenda: [
      { base: "E", hora: "14h00" },
      { base: "D", hora: "15h15" },
      { base: "C", hora: "16h30" },
      { base: "B", hora: "18h15" },
      { base: "A", hora: "19h30" },
      { base: "F", hora: "20h45" },
    ],
  },
  {
    id: "06",
    nome: "Equipe 06",
    composicao: "16º e 17º Pel",
    agenda: [
      { base: "F", hora: "14h00" },
      { base: "E", hora: "15h15" },
      { base: "D", hora: "16h30" },
      { base: "C", hora: "18h15" },
      { base: "B", hora: "19h30" },
      { base: "A", hora: "20h45" },
    ],
  },
];
