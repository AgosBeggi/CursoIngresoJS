function mostrar()
{
	//tomo la edad  
	let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad>=18)
	{
		alert("Usted es mayor de edad");
	}
	document.getElementById("txtIdEdad").value="";	
	//no hay else porque el enunciado no lo pide
}//FIN DE LA FUNCIÓN