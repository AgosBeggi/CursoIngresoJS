function mostrar()
{
	
	let edad;
	let estadoCivil;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil=document.getElementById("estadoCivil").value;

	if(estadoCivil=="Soltero" && edad>=18)
	{
		alert("Es soltero y no es menor");
	}
	
	document.getElementById("txtIdEdad").value="";
	document.getElementById("estadoCivil").value="";
	
	/* a esta parte del resultado:
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA
	no hay que darle bola porque me está diciendo que no haga nada*/
}//FIN DE LA FUNCIÓN