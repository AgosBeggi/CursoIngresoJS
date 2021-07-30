/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 9."));

	while (numeroIngresado < 0 || numeroIngresado > 9) {
		numeroIngresado = prompt("Numero fuera de rango." + "\nIntente nuevamente");
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
}
/*do
	{
		numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 9."));
		//si acá le agrego el .value; no me lo toma

	}while(numeroIngresado<0 || numeroIngresado>9);*/