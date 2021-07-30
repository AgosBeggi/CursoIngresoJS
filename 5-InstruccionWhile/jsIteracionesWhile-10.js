/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:*/
/*1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, 
(positvos-negativos).*/
function mostrar() {
	let numeroIngresado;
	let acumuladorNegativos = "";
	let acumuladorPositivos = "";
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorNegativos = 0;
	let contadorPositivos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioNegativos;
	let promedioPositivos;
	let respuesta = "S";
	let diferencia;

	do{
		numeroIngresado = parseFloat(prompt("Ingrese un número"));
		if (numeroIngresado == 0) {
			contadorCeros++;
		}
		else {
			if (numeroIngresado > 0) {
				acumuladorPositivos = acumuladorPositivos + numeroIngresado + " ";
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos++;
				promedioPositivos = (sumaPositivos / contadorPositivos).toFixed(2);
			} else {
				acumuladorNegativos = acumuladorNegativos + numeroIngresado + " ";
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativos++;
				promedioNegativos = (sumaNegativos / contadorNegativos).toFixed(2);
			}
		}
		if (numeroIngresado % 2 == 0) {
			contadorPares++;
		}
		diferencia = sumaPositivos + sumaNegativos;
		respuesta = prompt("¿Desea sumar otro número?" + "\nS / N");
	} while (respuesta != "N" && respuesta != "n");

	document.write("Números Negativos: " + acumuladorNegativos + "<br>" + "Suma: " + sumaNegativos + "<br>" + "Cantidad: " + contadorNegativos + "<br>");
	if(!isNaN(promedioPositivos)){
		document.write("Promedio: " + promedioNegativos);
	}
	document.write("<br>" + "<br>" + "Números Positivos: " + acumuladorPositivos + "<br>" + "Suma: " + sumaPositivos + "<br>" + "Cantidad: " + contadorPositivos + "<br>");
	if(!isNaN(promedioNegativos)){ //no is not a number?
		document.write("Promedio: " + promedioPositivos);
	}
	document.write("<br>" + "<br>" + "Cantidad de ceros ingresados: " + contadorCeros);
	document.write("<br>" + "<br>" + "Cantidad de números pares: " + contadorPares);
	document.write("<br>" + "<br>" + "Diferencia entre números positivos y negativos: " + diferencia);
}
