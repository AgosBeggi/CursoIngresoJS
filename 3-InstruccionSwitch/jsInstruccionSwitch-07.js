function mostrar()
{
	
	/*Al selecionar un destino , indicar el punto cardinal de 
	nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
	
	let region;

	region=document.getElementById("txtIdDestino").value;

	switch(region)
	{
		case "Cataratas":
			alert("El punto cardinal es Norte");
			break;
		case "Mar del plata":
			alert("El punto cardinal es Sureste");
			break;
		default:
			alert("El punto cardinal es Sur");
			break;
	
	}


}//FIN DE LA FUNCIÓN