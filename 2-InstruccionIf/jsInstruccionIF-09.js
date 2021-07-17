function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/*con el parseInt no sirve porque no al tomar 
	solamente el numero MediaElementAudioSourceNode, jamás pordría salir el 10*/
	
	alert(Math.round(Math.random()*10+1));
	
	
	/*Math.floor() redondea al numero mas bajo
	Math.ceil() redondea para arriba
	Math.round() redondea al numero mas cercano, sea para arriba o para abajo
	Math.random() tira numeros entre 0 y 1*/
	
	/*la profe lo hizo así
	let numero;
	let minimo=1;
	let maximo=10;

	numero=Math.round(Math.random()*(maximo-minimo)+minimo);
	alert(numero);

	porque en un código de gran tamaño directamente buscas la
	variable y cambias los valores de rango que queres

	/*contadores son variables que van contando de a uno
	se les da el valor cuando las inicializas

	*/
}//FIN DE LA FUNCIÓN