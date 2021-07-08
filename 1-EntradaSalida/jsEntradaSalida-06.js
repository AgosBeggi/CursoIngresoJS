/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//1.guardar los numeros en variables
	//2.pasarlos a enteros
	//3.sumarlos
	//4.crear una variable para el resultado y mostrarlo
	let num1;
	let num2;
	let resultado;

	//txtIdNumeroUno
	//txtIdNumeroDos
	num1=document.getElementById("txtIdNumeroUno").value;
	num2=document.getElementById("txtIdNumeroDos").value;
	parseInt(num1,Number);
	parseInt(num2,Number);
	resultado=sumar(num1+num2);
	//preguntar en clase cómo funciona el parseInt y cómo determino la variable
	/*escribí esto "resultado=num1+num2;" y me costró los números juntos
	como si fuera una cadena literal de texto, 
	si cambio el + por una , entonces me muestra sólo
	el primer número*/
	alert(resultado);
}

