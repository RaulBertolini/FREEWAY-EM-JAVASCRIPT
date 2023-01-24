//Código do Carro

let xCarros = [ 610, 610, 610, 610, 610, 610];
let yCarros = [ 43, 98, 150, 212, 265, 320];
let veloCarros = [ 2, 3.2, 2.5, 4, 5, 1.5];
let compriCarro = 60
let alturaCarro = 35

function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i],xCarros[i], yCarros[i], compriCarro, alturaCarro);
  }
}

function moviCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    xCarros[i] -= veloCarros[i];
  }
}

function voltaPosInicialDoCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 610;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < - 55;
}





