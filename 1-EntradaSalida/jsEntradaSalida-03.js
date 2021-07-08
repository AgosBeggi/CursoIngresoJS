/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	el txtIdNombre es una variable que crea el navegador con el mismo
	nombre que le pone el programador al htmal, no todos los navegadores
	hacen esto, porque lo que si queremos que funcione en cualquier
	navegador, es mejor hacerlo con los comandos de js como aparece abajo
	chrome lo hace y firefox lo incorporó en 2019
	alert("ok");
	esto se puede usar, pero no es 
	js puro*/
	let nombreIngresado;
	nombre=document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);
	document.getElementById("txtIdNombre").value="";
	/*esto se hace para que la caja de texto quede vacía
	despues de mostrar la alerta, pero no borra la variable
	nombre, eso ya queda guardado*/

}


