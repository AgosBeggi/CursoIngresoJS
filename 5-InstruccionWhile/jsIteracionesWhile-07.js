/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let respuesta="S";

	while (respuesta != "N" && respuesta != "n") {
		numeroIngresado = parseInt(prompt("ingrese un número"));
		acumulador = acumulador + numeroIngresado;
		console.log("numero ingresado" + numeroIngresado);
		contador++;
		respuesta = prompt("¿Desea sumar otro número?" + "\nS / N");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

	console.log("contador" + contador);
	console.log("acumulador" + acumulador);

}//FIN DE LA FUNCIÓN