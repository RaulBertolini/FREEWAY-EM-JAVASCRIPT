function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imgDaEstrada);
  mostraAtor();
  mostraCarro();
  moviCarro();
  moviAtor();
  voltaPosInicialDoCarro();
  verifColisao();
  incluiPontos();
  marcaPonto();
} 













