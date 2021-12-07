//Configurando carrinho do Pedro
const velMaximaPedro = 230;
const velMinimaPedro = 150;
const txDerrapagemPedro = 0.03;

//Configurando carrinho do Juca
const velMaximaJuca = 260;
const velMinimaJuca = 120;
const txDerrapagemJuca = 0.05;

//Configurando carrinho da Edna
const velMaximaEdna = 220;
const velMinimaEdna = 180;
const txDerrapagemEdna = 0.01;

//Criando contadores de vitoria

let vitoriaPedro = 0;
let vitoriaJuca = 0;
let vitoriaEdna = 0;

//Função que busca a velocidade de um carrinho
function getVelocity(min, max) {
  return (Math.random() * (max - min)) + min;
}

//Função que executa a corrida
function executaCorrida(numeroVoltas) {

  for (let i = 0; i <= numeroVoltas; i++) {
    if (i == numeroVoltas) {
      return vencer()
    }
    //Executa calculo de velocidade do Pedro
    let velocidadePedro = getVelocity(velMinimaPedro, velMaximaPedro);
    velocidadePedro = velocidadePedro - (velocidadePedro * txDerrapagemPedro);

    //Executa calculo de velocidade do Juca
    let velocidadeJuca = getVelocity(velMinimaJuca, velMaximaJuca);
    velocidadeJuca = velocidadeJuca - (velocidadeJuca * txDerrapagemJuca);

    //Executa calculo de velocidade da Edna
    let velocidadeEdna = getVelocity(velMinimaEdna, velMaximaEdna);
    velocidadeEdna = velocidadeEdna - (velocidadeEdna * txDerrapagemEdna);

    //Identifica quem ganhou a volta

    if ((velocidadePedro > velocidadeJuca) && (velocidadePedro > velocidadeEdna)) {
      vitoriaPedro++

    } else if ((velocidadeJuca > velocidadePedro) && (velocidadeJuca > velocidadeEdna)) {
      vitoriaJuca++

    } else if ((velocidadeEdna > velocidadeJuca) && (velocidadeEdna > velocidadePedro)) {
      vitoriaEdna++

    }
  }
}

function vencer() {
let vencedor = "";

  if ((vitoriaPedro > vitoriaJuca) && (vitoriaPedro > vitoriaEdna)) {
    vencedor = "Pedro"
    
  } 
  else if ((vitoriaJuca > vitoriaPedro) && (vitoriaJuca > vitoriaEdna)) {
    vencedor = "Juca"
   
  } else if ((vitoriaEdna > vitoriaJuca) && (vitoriaEdna > vitoriaPedro)) {
    vencedor = "Edna"
 
  }
 console.log("O vencedor é " + vencedor);
 document.getElementById("vencedor").innerHTML = "O ganhador é " + vencedor;
}
