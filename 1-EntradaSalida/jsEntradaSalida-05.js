/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//txtIdNombre
	//txtIdEdad
	let nombre;
	let edad;
	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	/*alert("Usted se llama ",nombre," y tiene ",edad,"años");
	eso había escrito, pero funciona con el +*/
	alert("Usted se llama "+nombre+" y tiene "+edad+" años");
	document.getElementById("txtIdNombre").value="";
	document.getElementById("txtIdEdad").value="";
}

