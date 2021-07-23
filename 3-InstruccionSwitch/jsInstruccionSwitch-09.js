function mostrar()
{
	const PRECIO_ESTADIA=15000;
	let estacion;
	let localidad;
	let descuento=0;
	let aumento=0;
	let precioFinal;

	estacion=document.getElementById("txtIdEstacion").value;
	localidad=document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			if(localidad=="Bariloche")
			{
				aumento=20;
			}
			else if(localidad=="Mar del plata")
			{
				descuento=20;
			}
			else
			{
				descuento=10;
			}
		break;
		case "Verano":
			if(localidad=="Bariloche")
			{
				descuento=20;
			}
			else if(localidad=="Mar del plata")
			{
				aumento=20;
			}
			else
			{
				aumento=10;
			}
		break;
		default:
			if(localidad!="Cordoba")
			{
				aumento=10;
			}
		break;
	}
	if(descuento!=0)
	{
		precioFinal=PRECIO_ESTADIA-(PRECIO_ESTADIA*descuento/100);
	}	
	else if(aumento!=0)
	{
		precioFinal=PRECIO_ESTADIA+(PRECIO_ESTADIA*aumento/100);
	}
	else
	{
		precioFinal=PRECIO_ESTADIA;
	}

	alert("El precio es " + precioFinal);

}//FIN DE LA FUNCIÓN