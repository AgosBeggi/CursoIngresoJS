function mostrar()
{
	/*En el ingreso a un viaje en avion nos solicitan 
	nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos (tomo mayores de edad a >=21)
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
let nombreIngresado;
let edadIngresada;
let sexoIngresado;
let estadoCivil;
let temperaturaCorporal;

let temperaturaCorporalMaxima = 0;
let nombreMayorTemperatura;

let mayoresViudos = 0;

let hombresSolteros = 0;
let hombresViudos = 0;

let edadSolteros=0;
let promedio=0;

let grandesConAltaTemperatura=0;

let flag = true;

let respuesta = "S";

do {
	nombreIngresado = prompt("Ingrese su nombre");
	edadIngresada = parseInt(prompt("Ingrese su edad"));
	while(isNaN(edadIngresada)){
		edadIngresada = parseInt(prompt("Edad incorrecta. Ingrese su edad"));
	}
	sexoIngresado = prompt("Ingrese su sexo \n(f para femenino, m para masculino)");
	while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado!="M" && sexoIngresado!="F") {
		sexoIngresado = prompt("Sexo incorrecto. Ingrese su sexo \n(f para femenino, m para masculino");
	}
	estadoCivil = prompt("Indique su estado civil \n(soltero, casado o viudo)");
	while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
		estadoCivil = prompt("Estado civil incorrecto. Indique su estado civil \n(soltero, casado o viudo)");
	}
	temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal"));
	while(isNaN(temperaturaCorporal)){
		temperaturaCorporal = parseFloat(prompt("Temperatura incorrecta. Ingrese su temperatura corporal"));
	}

	console.log("nombreIngresado: " + nombreIngresado);
	console.log("edadIngresada:" + edadIngresada);
	console.log("sexoIngresado: " + sexoIngresado);
	console.log("estadoCivil: " + estadoCivil);
	console.log("temperaturaCorporal: " + temperaturaCorporal);

	//CTRL +D te selecciona de a uno todo lo que está escrito igual
	//las flechas para abajo al lado de los numeros te cierra el código
	//a) El nombre de la persona con mas temperatura.
	if (flag == true || temperaturaCorporal > temperaturaCorporalMaxima) {
		 temperaturaCorporalMaxima=temperaturaCorporal;
		 nombreMayorTemperatura = nombreIngresado;
		flag = false;
	}
	
	//b) Cuantos mayores de edad estan viudos
	if (edadIngresada >= 21 && estadoCivil == "viudo") {
		mayoresViudos++;
	}
	//c) La cantidad de hombres que hay solteros o viudos.
	if (sexoIngresado == "m") {
		if (estadoCivil == "soltero"){
			hombresSolteros++;
			edadSolteros=edadSolteros+edadIngresada;
		}else if(estadoCivil=="viudo"){
			hombresViudos++;
		}
	}
	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	if(edadIngresada>=60 && temperaturaCorporal>38){
		grandesConAltaTemperatura++;
	}
	
	respuesta = prompt("¿Desea ingresar otro dato?" + "\nS / N");
}while (respuesta != "N" && respuesta != "n");
//e) El promedio de edad entre los hombres solteros
promedio=edadSolteros/hombresSolteros;

document.write("El nombre de la persona con mas temperatura es: " + nombreMayorTemperatura);
document.write("<br>" + "La cantidad de mayores de edad estan viudos es: " + mayoresViudos);
document.write("<br>" + "La cantidad de hombres solteros es: " + hombresSolteros);
document.write("<br>" + "La cantidad de hombres viudos es: " + hombresViudos);
document.write("<br>" + "La cantidad de personas de la tercera edad que tienen mas de 38 de temperatura" + grandesConAltaTemperatura);
document.write("<br>" + "El promedio de edad entre los hombres solteros" + promedio);
}
