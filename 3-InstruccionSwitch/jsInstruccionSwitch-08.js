function mostrar()
{
	/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
	let region;

	region=document.getElementById("txtIdDestino").value;

	switch(region)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
			break;
		default:
			alert("FRIO");
			break;
	
	}


}//FIN DE LA FUNCIÓN