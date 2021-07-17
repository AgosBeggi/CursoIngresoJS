function mostrar()
{
	let nota;
	
	//nota=(Math.random()*10).toFixed(2);
	//si bien eso funciona, lo correcto es mltiplicar
	//el valor maximo y sumar el valor minimo
	nota=(Math.random()*10+1).toFixed(2);

	if(nota<4)
	{
		alert("Vamos, la proxima se puede");
	}
	else if (nota<9)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("EXCELENTE");
	}

	console.log(nota);
}//FIN DE LA FUNCIÓN