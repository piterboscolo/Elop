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
  lead: "Toque em cada base para ver a tarefa. Os pinos funcionam do mesmo jeito.",
};

const BASES = [
  {
    id: "R",
    titulo: "Base R",
    apelido: "Local de Revista",
    duracao: "10 min",
    resumo: "Ponto junto às árvores menores do lado esquerdo.",
    fazer: "Confirmem os nomes da equipe e leiam as regras desta base.",
    cor: "#4f6b32",
    fundo: "#d7e4bb",
    px: 450,
    py: 400,
    etiqueta: "acima",
  },
  {
    id: "A",
    titulo: "Base A",
    apelido: "Local de crime",
    duracao: "15 min",
    resumo: "No fim do barracão, sobre o telhado vermelho, na frente do posto E.",
    fazer: "Encontrem três detalhes do lugar ligados ao tema da atividade e anotem no cartão da base.",
    cor: "#a8641f",
    fundo: "#f6d3a6",
    px: 308,
    py: 352,
    etiqueta: "abaixo",
  },
  {
    id: "B",
    titulo: "Base B",
    apelido: "Acompanhamento e cerco de veículo",
    duracao: "20 min",
    resumo: "Em cima do barracão com o letreiro Escola Superior de Sargentos.",
    fazer: "Leiam o enunciado, combinem uma estratégia e executem. Se travarem, chamem o monitor.",
    cor: "#2a648f",
    fundo: "#c9dff0",
    px: 660,
    py: 555,
    etiqueta: "acima",
  },
  {
    id: "C",
    titulo: "Base C",
    apelido: "Ocorrência com refém subjugado",
    duracao: "15 min",
    resumo: "No vão entre os dois prédios do lado esquerdo inferior.",
    fazer: "Comparem as anotações e fechem, juntos, uma resposta única.",
    cor: "#9d3f4e",
    fundo: "#f6cfd5",
    px: 200,
    py: 575,
    etiqueta: "acima",
  },
  {
    id: "D",
    titulo: "Base D",
    apelido: "APH Tático",
    duracao: "10 min",
    resumo: "No lado direito superior, em cima das árvores.",
    fazer: "Entreguem o que produziram e aguardem a orientação final.",
    cor: "#62458f",
    fundo: "#ddd0f2",
    px: 680,
    py: 120,
    etiqueta: "abaixo",
  },
  {
    id: "E",
    titulo: "Base E",
    apelido: "Perturbação de sossego público / violência doméstica",
    duracao: "15 min",
    resumo: "Na parte de cima, junto ao muro do lado esquerdo.",
    fazer: "Leiam a tarefa da base e registrem a resposta da equipe.",
    cor: "#0f6e6e",
    fundo: "#c9ebe4",
    px: 180,
    py: 190,
    etiqueta: "abaixo",
  },
  {
    id: "F",
    titulo: "Base F",
    apelido: "Ocorrência de trânsito com vítima envolvendo veículo oficial",
    duracao: "15 min",
    resumo: "Parada no lado direito do campus, junto à área aberta.",
    fazer: "Leiam a tarefa da base e registrem a resposta da equipe.",
    cor: "#8a4b12",
    fundo: "#f3d7b8",
    px: 740,
    py: 300,
    etiqueta: "abaixo",
  },
];
