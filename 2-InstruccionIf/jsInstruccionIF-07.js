function mostrar()
{
	//txtIdEdad
	//estadoCivil
	let edad;
	let estadoCivil;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil=document.getElementById("estadoCivil").value;

	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	document.getElementById("txtIdEdad").value="";
	document.getElementById("estadoCivil").value="";

}//FIN DE LA FUNCIÓN