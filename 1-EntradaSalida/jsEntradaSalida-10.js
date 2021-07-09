/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let num1;
	let porcentaje;
	let resultado;
	num1=parseInt(document.getElementById("txtIdImporte").value);
	porcentaje=num1*25/100;
	resultado=num1-porcentaje;
	document.getElementById("txtIdResultado").value=resultado;	
}
