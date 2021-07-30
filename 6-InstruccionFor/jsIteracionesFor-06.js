function mostrar()
{
	let numeroIngresado;
	let acumuladorPares="";
	let cantidadPares=0;

	numeroIngresado=parseInt(prompt("Ingrese un número"));
	for(let i=1;i<=numeroIngresado;i++){
		if(i%2==0){
			acumuladorPares=acumuladorPares+i+" ";
			cantidadPares++;
		}
	}

	console.log("acumulador de pares: "+ acumuladorPares);
	console.log("contador de pares: " + cantidadPares);

}//FIN DE LA FUNCIÓN