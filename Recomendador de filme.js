//Alura é muito memes

let filmesInfantil = ["La La Land", "A Fantástica Fábrica de Chocolate", "A Noiva-Cadáver", "Apenas uma Vez", "A Vida é Bela"];
let filmesAdolescente = ["Forrest Gump - O Contador de Histórias", "Hoje Eu Quero Voltar Sozinho", "Como Eu Era Antes de Você", "Me Chame Pelo Seu Nome", "Um Sonho de Liberdade"];
let filmesAdulto = ["Cidade de Deus", "Pulp Fiction", "Apocalypse Now", "Vá e veja", "Psicose"];
let filmesIdoso = ["Casablanca", "A Felicidade Não se Compra", "E o Vento Levou", "Dança com Lobos", "Lawrence da Arábia"];

let idadeInput;
let recomendacoes = [];

function setup() {
  createCanvas(600, 400);
  background(255);

  idadeInput = createInput();
  idadeInput.position(20, 60);
  idadeInput.input(updateRecomendacoes);

  let label = createP('Digite sua idade:');
  label.position(20,20);

  let resultado = createDiv('');
  resultado.id('resultado');
  resultado.position(20, 100);
}

function updateRecomendacoes() {
  let idade = int(idadeInput.value());
  recomendacoes = recomendarFilmes(idade);

  let resultado = select('#resultado');
  resultado.html('Recomendações de filmes para sua idade:<br>' + recomendacoes.join('<br>'));
}

function recomendarFilmes(idade) {
  if (idade <= 12) {
    return filmesInfantil;
  } else if (idade >= 13 && idade <= 17) {
    return filmesAdolescente;
  } else if (idade >= 18 && idade <= 64) {
    return filmesAdulto;
  } else {
    return filmesIdoso;
  }
}
