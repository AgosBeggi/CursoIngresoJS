function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio=parseFloat(prompt("Ingrese el precio"));
    descuento=parseInt(prompt("Ingrese el porcentaje de descuento"));

    precioFinal=precio + (precio*descuento/100);

    document.getElementById("elPrecioFinal").value=precioFinal;
}
