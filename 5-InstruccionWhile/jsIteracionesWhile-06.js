function mostrar() {
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;

	while (contador < 5) {
		numeroIngresado = parseInt(prompt("ingrese un número"));
		acumulador = acumulador + numeroIngresado;
		console.log("numero ingresado" + numeroIngresado);
		contador++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

	console.log("contador" + contador);
	console.log("acumulador" + acumulador);
}//FIN DE LA FUNCIÓN