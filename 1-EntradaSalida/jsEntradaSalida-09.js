/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let num1;
	let porcentaje;
	let resultado;
	num1=parseInt(document.getElementById("txtIdSueldo").value);
	porcentaje=num1*10/100;
	resultado=num1+porcentaje;
	document.getElementById("txtIdResultado").value=resultado;	
}
