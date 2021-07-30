function mostrar()
{
	/*al presionar el botón pedir un número. 
	Informar si el numero es PRIMO o no.*/
	let numeroIngresado;
	let flag=true;

	numeroIngresado=parseInt(prompt("Ingrese un número"));
	
	for(let i=2;i<numeroIngresado;i++){
		if(numeroIngresado%i==0){
			flag=false;
			break;
		}
	}

	if(flag==false){
		alert("No es primo");
	}
	else{
		alert("Es primo");
	}

}//FIN DE LA FUNCIÓN