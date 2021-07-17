function mostrar()
{
	//txtIdEdad
	//tomo la edad  
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad<=12 || edad>=18)
	{
		alert("Usted no es adolescente");
	}
	document.getElementById("txtIdEdad").value="";

	
}//FIN DE LA FUNCIÓN