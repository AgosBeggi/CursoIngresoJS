function mostrar()
/*al presionar el botón pedir un número. mostrar los 
numeros divisores desde el 1 al número ingresado, y 
mostrar la cantidad de numeros divisores encontrados*/
{
	let numeroIngresado;
	let acumuladorDivisores="";
	let cantidadDivisores=0;

	numeroIngresado=parseInt(prompt("Ingrese un número"));
	for(let i=1;i<=numeroIngresado;i++){
		if(numeroIngresado%i==0){
			acumuladorDivisores=acumuladorDivisores+i+" ";
			cantidadDivisores++;
		}
	}

	console.log("acumulador de divisores: "+ acumuladorDivisores);
	console.log("contador de divisores: " + cantidadDivisores);

}//FIN DE LA FUNCIÓN