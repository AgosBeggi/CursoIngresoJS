function mostrar()
{
	//al presionar el botón repetir hasta que utilizamos 'BREAK'.
	let respuesta;
	
	respuesta=parseInt(prompt("¿Cuántas veces quiere repetir el mensaje?"));
	for(let i=0;i<respuesta;i++){
		alert("Hola UTN FRA");
		if(respuesta==i){
			break;
		}
	}


}//FIN DE LA FUNCIÓN