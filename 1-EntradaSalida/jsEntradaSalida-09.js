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
	//como es sueldo, seguro tiene decimales, correspondería poner parseFloat
	porcentaje=num1*10/100;
	resultado=num1+porcentaje;
	document.getElementById("txtIdResultado").value=resultado;	
	/*siempre hay que hacer lo que dice la consigna, pero si 
	notamos que algo podría resolverse de otra manera, como en
	este caso con el parseFloat, preguntar si se cambia o 
	se resuelve tal cual está la consigna*/
}
