/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//1. tomar un dato po prompt
	//2. id tiene que mostrar el dato
	//3. necesito una variable para guardar el dato
	let nombreIngresado;
	nombreIngresado=prompt("Ingrese su nombre");
	/*antes había puesto:
	nombreIngresado=prompt("Ingrese su nombre").value;
	el error fué haber confundido la acción prompt con
	el getElement, el prompt no necesita value*/
	document.getElementById("txtIdNombre").value=nombreIngresado;

	
}

