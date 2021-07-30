var numeroSecreto;

function comenzar() {
  numeroSecreto = Math.round(Math.random() * (100 - 1) + 1);

  console.log(numeroSecreto);
}

function verificar() {
  
  let numeroIngresado;
  let intentos=0;

  numeroIngresado = parseInt(document.getElementById("txtIdNumero"));
  console.log(intentos);
  
  while(numeroIngresado!=numeroSecreto && intentos<5){
    if (numeroIngresado > numeroSecreto) {
      alert("Se pasó del número");
    }
    else {
      alert("Falta para llegar al número");
    }
    numeroIngresado=parseInt(prompt("Intente con otro número"));
    intentos++;
  }

  document.getElementById("txtIdIntentos").value="Cantidad de intentos: " + intentos;
  

  if(numeroIngresado==numeroSecreto){
    alert("Usted ganó");
  }
  else{
    alert("Se han acabado los intentos");
  }
  document.getElementById("txtIdNumero").vale=numeroIngresado;
}