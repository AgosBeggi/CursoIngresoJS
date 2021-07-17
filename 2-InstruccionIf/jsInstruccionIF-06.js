function mostrar()
{
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edad>=13 && edad<=17)
		{
			alert("Usted es adolescente");
		}
		else
		{
			alert("Usted es menor de edad");
		}
			
	}

	document.getElementById("txtIdEdad").value="";
	/*esta es la mejor opción
	if(edad<13)
	{
		alert("Usted es menor de edad");
	}
	else if(edad>18)
		{
			alert("Usted es adolescente");
		}
		else
		{
			alert("Usted es mayor de edad");
		}
			
	}*/

}//FIN DE LA FUNCIÓN