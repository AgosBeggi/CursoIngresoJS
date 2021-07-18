/*Ferrete Iluminación - A
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */
function CalcularPrecio () 
{
 	//txtIdCantidad
    const PRECIO=35;
    let cantidad;
    let precioTotal;
    let porcentaje;
    let descuento;
    let marca;
    let impuesto;
    let precioFinal;

    //ArgentinaLuz
    /*Si el importe final con descuento suma más de $120 se debe sumar un 10% 
    de ingresos brutos e informar del impuesto con el siguiente mensaje: 
    ”IIBB Usted pago X”, siendo X el impuesto que se pagó.*/

    cantidad=parseInt(document.getElementById("txtIdCantidad").value);
    marca=document.getElementById("Marca").value;
    precioTotal=cantidad*PRECIO;

    /*if(cantidad==3 && marca=="ArgentinaLuz")
    {
        porcentaje=precioTotal*15/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
    }
    else if(cantidad==3 && marca=="FelipeLamparas")
    {
        porcentaje=precioTotal*10/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
    }
    else if(cantidad==3)
    {
        porcentaje=precioTotal*5/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
    }
    else if(cantidad==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
    {
        porcentaje=precioTotal*25/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
    }
    else if(cantidad==4 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
    {
        porcentaje=precioTotal*20/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
    }
    else if (cantidad==5 && marca=="ArgentinaLuz")
    {
        porcentaje=precioTotal*40/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
    }
    else if(cantidad==5 && marca!="ArgentinaLuz")
    {
        porcentaje=precioTotal*30/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
    }
    else if (cantidad>=6)
    {
        porcentaje=precioTotal*50/100;
        descuento=precioTotal-porcentaje;
        document.getElementById("txtIdprecioDescuento").value=descuento;
        if(descuento>120)
        {
            impuesto=descuento*10/100;
        precioFinal=descuento+impuesto;
        alert("IIBB Usted pago " + precioFinal);
        }
    }*/

    switch(cantidad)
        {
            case 1:
            case 2:
                document.getElementById("txtIdprecioDescuento").value=precioTotal;
                break;
            case 3:
                if(marca=="ArgentinaLuz")
                {
                    porcentaje=precioTotal*15/100;
                    descuento=precioTotal-porcentaje;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                }
                else if(marca=="FelipeLamparas")
                {
                    porcentaje=precioTotal*10/100;
                    descuento=precioTotal-porcentaje;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                }
                else
                {
                    porcentaje=precioTotal*5/100;
                    descuento=precioTotal-porcentaje;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                }
               
                break;             

            case 4:
                if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    porcentaje=precioTotal*25/100;
                    descuento=precioTotal-porcentaje;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                }
                else //if(marca!="ArgentinaLuz" && marca!="FelipeLamparas")
                     //eso no va, porque es repetir el if, porque si no es
                     //x marca ó x marca, van a ser el resto de las marcas
                {
                    porcentaje=precioTotal*20/100;
                    descuento=precioTotal-porcentaje;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                }
                break;

            case 5:
                if(marca=="ArgentinaLuz")
                {
                    porcentaje=precioTotal*40/100;
                    descuento=precioTotal-porcentaje;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                }
                else
                {
                    porcentaje=precioTotal*30/100;
                    descuento=precioTotal-porcentaje;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                }
                break;

            default:
                porcentaje=precioTotal*50/100;
                descuento=precioTotal-porcentaje;
                document.getElementById("txtIdprecioDescuento").value=descuento;
                if(descuento>120)
                {
                    impuesto=descuento*10/100;
                    precioFinal=descuento+impuesto;
                    document.getElementById("txtIdprecioDescuento").value=descuento;
                    alert("IIBB Usted pagó " + precioFinal);
                }
                break;

        }
    
}

