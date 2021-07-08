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
	//se puede hacer de las dos maneras
	//num1=parseInt(num1);
	//num2=parseInt(num2);
	//alert(num1+num2);
	resultado=parseInt(num1)+parseInt(num2);
	alert(resultado);
}

