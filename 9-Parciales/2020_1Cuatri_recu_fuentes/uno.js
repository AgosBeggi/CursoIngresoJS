
function mostrar() {
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;

	let flag = true;
	let jabonMasCAro = 0;
	let unidadesMasCAroJabon = 0;
	let jabonFabricanteMasCaro;

	let promedio;

	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;
	let contadorAlcohol = 0;
	let contadorBarbijo = 0;
	let contadorJabon = 0;

	for (let i = 0; i < 5; i++) {
		tipo = prompt('"Ingrese ele tipo de producto\n("barbijo" , "jabón" o "alcohol")"');
		while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {
			tipo = prompt('"Error. Ingrese ele tipo de producto\n("barbijo" , "jabón" o "alcohol")"');
		}
		precio = parseFloat(prompt("Ingrese el precio\n(entre 100 y 300)"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseFloat(prompt("Error. Ingrese el precio\n(entre 100 y 300)"));
		}
		cantidad = parseInt(prompt("Ingrese el cantidad\n(hasta 1000)"));
		while (isNaN(cantidad) || cantidad < 0 || cantidad > 1000) {
			cantidad = parseInt(prompt("Error. Ingrese el cantidad\n(hasta 1000)"));
		}
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");

		switch (tipo) {
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contadorBarbijo++;
				break;
			case "jabon":
				if (flag == true || jabonMasCAro < precio) {
					jabonMasCAro = precio;
					unidadesMasCAroJabon = cantidad;
					jabonFabricanteMasCaro = fabricante;
				}
				acumuladorJabon += cantidad;
				contadorJabon++;
				break;
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;
				break;
		}
	}

	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
		promedio = (acumuladorAlcohol / contadorAlcohol).toFixed(2);
	} else if (acumuladorBarbijo > acumuladorJabon) {
		promedio = (acumuladorBarbijo / contadorBarbijo).toFixed(2);
	} else {
		promedio = (acumuladorJabon / contadorJabon).toFixed(2);
	}

	alert("Del más caro de los jabones, la cantidad de unidades " + unidadesMasCAroJabon + " y el fabricante es: " + jabonFabricanteMasCaro);
	alert("El tipo de producto con más unidades en total de la compra, el promedio por compra es: " + promedio);
	alert("Cuántas unidades de Barbijos se compraron en total: " + acumuladorBarbijo);

}
