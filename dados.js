/* Textos, cores e a posição de cada base sobre a foto.
   As bases são independentes: não há caminho ligando uma à outra.
   px, py: centro do pino, no mesmo sistema da foto (1024 x 780).
   etiqueta: "acima" ou "abaixo" — lado da marca de concluída. */

const VIEW = { w: 1024, h: 768 };

const MAPA = {
  arquivo: "mapa-local.jpg",
  w: 1024,
  h: 780,
  lugar: "Escola Superior de Sargentos",
};

const EVENTO = {
  nome: "ELOP",
  chamada: "Circuito presencial",
  quando: "Data a definir",
  lead: "Toque em cada base para ver a tarefa. Os cinco pinos funcionam do mesmo jeito.",
};

const BASES = [
  {
    id: 1,
    titulo: "Base 1",
    apelido: "Entrada",
    duracao: "10 min",
    resumo: "Ponto de partida, na área central do campus.",
    fazer: "Confirmem os nomes da equipe e leiam as regras desta base.",
    cor: "#4f6b32",
    fundo: "#d7e4bb",
    px: 500,
    py: 560,
    etiqueta: "acima",
  },
  {
    id: 2,
    titulo: "Base 2",
    apelido: "Barracão",
    duracao: "15 min",
    resumo: "Parada no primeiro barracão, o de telhado claro à esquerda.",
    fazer: "Encontrem três detalhes do lugar ligados ao tema da atividade e anotem no cartão da base.",
    cor: "#a8641f",
    fundo: "#f6d3a6",
    px: 130,
    py: 500,
    etiqueta: "acima",
  },
  {
    id: 3,
    titulo: "Base 3",
    apelido: "Pátio",
    duracao: "20 min",
    resumo: "A tarefa prática acontece no campo aberto, ao lado do prédio principal.",
    fazer: "Leiam o enunciado, combinem uma estratégia e executem. Se travarem, chamem o monitor.",
    cor: "#2a648f",
    fundo: "#c9dff0",
    px: 590,
    py: 360,
    etiqueta: "acima",
  },
  {
    id: 4,
    titulo: "Base 4",
    apelido: "Escola",
    duracao: "15 min",
    resumo: "Parada no prédio menor, o que aparece marcado na foto.",
    fazer: "Comparem as anotações e fechem, juntos, uma resposta única.",
    cor: "#9d3f4e",
    fundo: "#f6cfd5",
    px: 680,
    py: 545,
    etiqueta: "acima",
  },
  {
    id: 5,
    titulo: "Base 5",
    apelido: "Campo",
    duracao: "10 min",
    resumo: "Encerramento no campo verde da parte de cima do mapa.",
    fazer: "Entreguem o que produziram e aguardem a orientação final.",
    cor: "#62458f",
    fundo: "#ddd0f2",
    px: 455,
    py: 155,
    etiqueta: "abaixo",
  },
];
