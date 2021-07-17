function mostrar()
{
	//tomo la edad  
	
	//txtIdEdad
	let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad==15)
	{
		alert("niña bonita");
	}
	document.getElementById("txtIdEdad").value="";
	//no hay else, porque el enunciado no lo pide
}//FIN DE LA FUNCIÓN