function mostrar()
{
	let hora;

	hora=parseInt(document.getElementById("txtIdHora").value);
	//parseInt porque dijeron horas en punto
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;
		default:
			if(hora>24)
			{
				alert("la hora no existe.");
			}
			else
			{
				alert("Es de noche");
			}
			break;
	}
	//podría hacerse validación de datos para las horas que no existen
}//FIN DE LA FUNCIÓN