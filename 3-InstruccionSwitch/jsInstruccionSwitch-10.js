function mostrar()
{
	let estacion;
	let localidad;
	

	estacion=document.getElementById("txtIdEstacion").value;
	localidad=document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			if(localidad=="Bariloche")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}
			break;
		case "Verano":
			if(localidad=="Mar del plata" || localidad=="Cataratas")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}
			break;
		case "Primavera":
			if(localidad=="Bariloche")
			{
				alert("No se viaja");
			}
			else
			{
				alert("Se viaja");
			}
			break;
		default:
			alert("Se viaja");
		break;
	}


}//FIN DE LA FUNCIÓN