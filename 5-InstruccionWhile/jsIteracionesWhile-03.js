/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let claveIngresada;
	claveIngresada = prompt("Ingrese la clave.").value;
	while (claveIngresada != "utn750") {
		claveIngresada = prompt("Clave incorrecta." + "\nVuelva a ingresar la clave");
	}
}
	/*do
	{
		claveIngresada=prompt("Ingrese la clave");
	}while(claveIngresada!="utn750");*/

	//cómo salgo del while si ya tengo lo que quiero?
	//ver do while
	/*invierte el while
	sintaxis
	do
	{

	}while(condicion);
	este while no tiene llaves, porque el bloque de código está
	adentro del do, pero sí tiene ; para cerrar el do*/


