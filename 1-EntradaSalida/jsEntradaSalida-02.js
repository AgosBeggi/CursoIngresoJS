/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*para definir variables en js
	antes se ponía "var" y el nombre
	de la referencia de lo que va a 
	contener la variable*/
	let nombre; //hasta el 2015 en js se definían con "var", ahora es "let"
	/*también se puede inicializar escribiendo
	let nombre="Juan";*/
	nombre=prompt("Escribir un nombre");
	/*también se puede escribir así
	*/
	alert(nombre);
	//un espacio en blanco es esto: " "
	//una cadena vacía es esto: ""
}

