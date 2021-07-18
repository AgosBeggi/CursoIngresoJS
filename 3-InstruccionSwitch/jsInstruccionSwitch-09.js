function mostrar()
{
	/*una agencia de viajes debe sacar las tarifas de los viajes , 
	se cobra $15.000 por cada estadia como base, se pide el ingreso
	de una estacion del plata localidad para vacacionar para poder 
	calcular el precio final*/
	//PRECIO_ESTADIA*estacion*localidad

	/*Invierno: 
	bariloche=20% AUMENTO
	Cataratas y	Cordoba=10% DESCUENTO
	del plata=20% DESCUENTO*/

	/*Verano: 
	bariloche 20% DESCUENTO
	cataratas y Cordoba 10% AUMENTO
	del plata 20% AUMENTO*/

	/*Otoño y Primavera: 
	bariloche tiene un aumento del plata	cataratas tiene un aumento del plata	del plata tiene un aumento del plata	Cordoba tiene el precio sin descuento*/

	const PRECIO_ESTADIA=15000;
	let estacion;
	let localidad;
	let porcentaje;
	let precioFinal;

	estacion=document.getElementById("txtIdEstacion").value;
	localidad=document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			if(localidad=="Bariloche")
			{
				//aumenta20
				porcentaje=PRECIO_ESTADIA*20/100;
				precioFinal=PRECIO_ESTADIA+porcentaje;
				alert("La tarifa es: $" + precioFinal);
			}
			else if(localidad=="Mar del plata")
			{
				//descuenta20
				porcentaje=PRECIO_ESTADIA*20/100;
				precioFinal=PRECIO_ESTADIA-porcentaje;
				alert("La tarifa es: $" + precioFinal);
			}
			else
			{
				//descuenta10
				porcentaje=PRECIO_ESTADIA*10/100;
				precioFinal=PRECIO_ESTADIA-porcentaje;
				alert("La tarifa es: $" + precioFinal);
			}
			break;
		case "Verano":
			if(localidad=="Bariloche")
			{
				//descuenta20
				porcentaje=PRECIO_ESTADIA*20/100;
				precioFinal=PRECIO_ESTADIA-porcentaje;
				alert("La tarifa es: $" + precioFinal);
			}
			else if(localidad=="Mar del plata")
			{
				//aumenta20
				porcentaje=PRECIO_ESTADIA*20/100;
				precioFinal=PRECIO_ESTADIA+porcentaje;
				alert("La tarifa es: $" + precioFinal);
			}
			else
			{
				//aumenta10
				porcentaje=PRECIO_ESTADIA*10/100;
				precioFinal=PRECIO_ESTADIA+porcentaje;
				alert("La tarifa es: $" + precioFinal);
			}
			break;
		default:
			if(localidad!="Cordoba")
			{
				//aumenta10
				porcentaje=PRECIO_ESTADIA*10/100;
				precioFinal=PRECIO_ESTADIA+porcentaje;
				alert("La tarifa es: $" + precioFinal);
			}
			else
			{
				alert("La tarifa es: $" + PRECIO_ESTADIA);
			}
		break;
	}




}//FIN DE LA FUNCIÓN