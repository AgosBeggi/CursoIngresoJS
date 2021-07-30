function mostrar()
{
	let suma=0;
	let multiplica=1;
	let numeroIngresado;
	let respuesta="S";
	let flag=false;

	while(respuesta != "N" && respuesta != "n"){
		numeroIngresado = parseInt(prompt("ingrese un número"));
		if(numeroIngresado >=0){
			suma = suma + numeroIngresado;
		}
		else {
			flag=true;
			multiplica = multiplica * numeroIngresado;
		}
		respuesta = prompt("¿Desea sumar otro número?" + "\nS / N");
	}

	document.getElementById("txtIdSuma").value = suma;
	if(flag==false){
		multiplica=0;
	}
	document.getElementById("txtIdProducto").value = multiplica;

}