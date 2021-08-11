/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar() {
	let tipoDeProducto;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;

	let falg = true;
	let precioMasBarato = 300;
	let precioAlcoholMasBarato = 300;
	let cantidadAlcoholMasBarato = 300;
	let fabricanteAlcoholMasBarato="";

	let cantidadTotalUnidades = 0;
	let promedio;

	let cantidadTotalJabon=0;
	let cantidadTotalAlcohol=0;
	let cantidadTotalBarbijo=0;

	for (let i = 0; i < 2; i++) {

		tipoDeProducto = prompt("Ingrese el tipo de producto \n(barbijo / alcohol / jabon)");
		while (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol") {
			tipoDeProducto = prompt("Tipo incorrecto. Ingrese el tipo de producto \n(barbijo / alcohol / jabon)");
		}
		precio = parseFloat(prompt("Ingrese el precio \n(entre 100 y 300)"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseFloat(prompt("Precio incorrecto. Ingrese el precio \n(entre 100 y 300)"));
		}
		cantidadUnidades = parseInt(prompt("Ingrese las unidades \n(no debe superar las 1000 unidades)"))
		while (isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000) {
			cantidadUnidades = parseInt(prompt("Cantidad incorrecta. Ingrese las unidades \n(no debe superar las 1000 unidades)"))
		}
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");

		//c) Cuántas unidades de jabones hay en total*/

		if (falg == true && precio<precioMasBarato) {
			precioMasBarato = precio;
			flag = false;
		}
		if(precio<precioMasBarato){
			precioMasBarato=precioMasBarato;
		}
		
		switch (tipoDeProducto) {
			case "alcohol":
				if (precioMasBarato < precioAlcoholMasBarato) {
					precioAlcoholMasBarato = precioMasBarato;
					cantidadAlcoholMasBarato = cantidadUnidades;
					fabricanteAlcoholMasBarato = fabricante;
				}
				cantidadTotalAlcohol=cantidadTotalAlcohol+cantidadUnidades;
				break;
			case "barbijo":
				cantidadTotalBarbijo=cantidadTotalBarbijo+cantidadUnidades;
				break;
			case "jabon":
				cantidadTotalJabon=cantidadTotalJabon+cantidadUnidades;
				break;
		}

		cantidadTotalUnidades=cantidadTotalUnidades+cantidadUnidades;
		
		console.log("tipp deproducto: " + tipoDeProducto);
		console.log("precio: " + precio);
		console.log("cantidad de unidades: " + cantidadUnidades);
		console.log("marca: " + marca);
		console.log("fabricante: " + fabricante);
		

	}
	//b) Del tipo con mas unidades, el promedio por compra
	if(cantidadTotalJabon>cantidadTotalAlcohol && cantidadTotalJabon>cantidadTotalBarbijo){
		promedio=(cantidadTotalJabon/cantidadTotalUnidades).toFixed(2);
	}else if(cantidadTotalAlcohol>cantidadTotalJabon){
		promedio=(cantidadTotalAlcohol/cantidadTotalUnidades).toFixed(2);
	}else{
		promedio=(cantidadTotalBarbijo/cantidadTotalUnidades).toFixed(2);
	}

	console.log("precio mas barato: " + precioMasBarato);
	console.log("alcohol mas barato: " + precioAlcoholMasBarato); 
	console.log("cantidad delalcohol mas barato: " + cantidadAlcoholMasBarato); 
	console.log("fabricante alcohol mas barato: " + fabricanteAlcoholMasBarato); 
	console.log("cantidad mayor de unidades:" + cantidadTotalUnidades);
	console.log("cantidad jabon: " + cantidadTotalJabon); 
	console.log("Tipo con mas unidades, el promedio por compra: " + promedio);
}

