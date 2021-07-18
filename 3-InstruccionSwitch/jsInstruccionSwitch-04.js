function mostrar()
{
	/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
	let mesDelAño;
	
	mesDelAño=document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;	
		default:
			alert("Este mes tiene 31 días");
			break;
	}


}//FIN DE LA FUNCIÓN