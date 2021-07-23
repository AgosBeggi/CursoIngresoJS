function CalcularPrecio() {
    const PRECIO = 35;
    const IIBB = 10;
    let cantidad;
    let marca;
    let precioTotal;
    let precioFinal;
    let descuento = 0;
    let precioFinalConImpuesto;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioTotal = cantidad * PRECIO;

    switch (cantidad) {
        case 1:
        case 2:
            precioFinal = precioTotal;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 15;
            }
            else if (marca == "FelipeLamparas") {
                descuento = 10;
            }
            else {
                descuento = 5;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 25;
            }
            else {
                descuento = 20;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            }
            else {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
            break;
    }
    if (descuento != 0) {
        precioFinal = precioTotal - (precioTotal * descuento / 100);
    }
    if (precioFinal > 120) {
        precioFinal = precioFinal + (precioFinal * IIBB / 100);
        precioFinalConImpuesto = precioFinal;
        alert("IIBB Usted pagó " + precioFinalConImpuesto);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}


/*if (cantidad == 3)
{
    if (marca == "ArgentinaLuz")
    {
        porcentaje = precioTotal * 15 / 100;
        precioFinal = precioTotal - porcentaje;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
    else if (marca == "FelipeLamparas")
    {
        porcentaje = precioTotal * 10 / 100;
        precioFinal = precioTotal - porcentaje;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
    else
    {
        porcentaje = precioTotal * 5 / 100;
        precioFinal = precioTotal - porcentaje;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
} else if (cantidad == 4)
{
    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
        porcentaje = precioTotal * 25 / 100;
        precioFinal = precioTotal - porcentaje;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
    else
    {
        porcentaje = precioTotal * 20 / 100;
        precioFinal = precioTotal - porcentaje;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
}
else if (cantidad == 5)
{
    if (marca == "ArgentinaLuz")
    {
        porcentaje = precioTotal * 40 / 100;
        precioFinal = precioTotal - porcentaje;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
    else
    {
        porcentaje = precioTotal * 30 / 100;
        precioFinal = precioTotal - porcentaje;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
}
else if (cantidad >= 6)
{
    porcentaje = precioTotal * 50 / 100;
    precioFinal = precioTotal - porcentaje;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
if (precioFinal > 120)
{
    impuesto = precioFinal * 10 / 100;
    precioFinalConImpuesto = precioFinal + impuesto;
    alert("IIBB Usted pago " + precioFinalConImpuesto);
}
*/