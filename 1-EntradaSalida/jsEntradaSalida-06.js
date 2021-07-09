/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//1.guardar los numeros en variables
	//2.pasarlos a enteros
	//3.sumarlos
	//4.mostrar el resultado
	let num1;
	let num2;
	let resultado;

	//txtIdNumeroUno
	//txtIdNumeroDos
	num1=document.getElementById("txtIdNumeroUno").value;
	num2=document.getElementById("txtIdNumeroDos").value;
	//se puede hacer de varias maneras maneras
	//num1=parseInt(num1);
	//num2=parseInt(num2);
	//alert(num1+num2);
	//num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	//num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=parseInt(num1)+parseInt(num2);
	alert(resultado);
}

