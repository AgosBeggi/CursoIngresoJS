/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let porcentaje;
	let resultado;
	//const PORCECTAJE=10; declaracion y definición de una constante
	importe=parseInt(document.getElementById("txtIdImporte").value);
	porcentaje=num1*25/100;
	//porcentaje=num1*PORCENTAJE/100;
	resultado=num1-porcentaje;
	document.getElementById("txtIdResultado").value=resultado;	
}
