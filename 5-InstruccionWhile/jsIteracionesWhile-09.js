
function mostrar() {
	let numeroIngresado;
	let maximo;
	let minimo;
	let respuesta="S";
	let flag=0;

	do{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		console.log(numeroIngresado);
		if(flag==0){
			minimo=numeroIngresado;
			maximo=numeroIngresado;
			flag=1;
		}
		else if(numeroIngresado >= maximo){
			maximo = numeroIngresado;
		}
		else if(numeroIngresado <= minimo){
			minimo = numeroIngresado;
		}
		respuesta = prompt("¿Desea sumar otro número?" + "\nS / N");
	}while(respuesta != "N" && respuesta != "n");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;



}//FIN DE LA FUNCIÓN