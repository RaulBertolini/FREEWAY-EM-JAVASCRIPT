//Código do Ator

let xAtor = 110;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imgDoAtor, xAtor, yAtor, 30, 30)
}

function moviAtor(){
  if (keyIsDown(87)){
    yAtor -= 3
  }
  if (keyIsDown(83)){
    if (podeSeMover()){
      yAtor += 3                
    }
  }
}

function verifColisao(){
  for (let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], compriCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      voltaAtor();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 370
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(27);
  fill(color(255,69,0));
  text(meusPontos, width / 5, 28)
}

function marcaPonto(){
  if (yAtor < 12){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtor();
  } 
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}




