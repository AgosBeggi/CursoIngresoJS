function mostrar()
{
	let numeroIngresado=0;
	
	for(let i=0;;i++){
		numeroIngresado=parseInt(prompt("Ingrese un número del 0 al 9"));
		if(numeroIngresado==9){
			break;
		}
		alert("Hola UTN FRA");
	}

	for(let i=0;numeroIngresado!=9;i++){
		numeroIngresado=parseInt(prompt("Ingrese un número del 0 al 9"));
		if(numeroIngresado==9){
			break;
		}
		alert("Hola UTN FRA");
	}

	for(;;){
		numeroIngresado=parseInt(prompt("Ingrese un número del 0 al 9"));
		if(numeroIngresado==9){
			break;
		}
		alert("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN