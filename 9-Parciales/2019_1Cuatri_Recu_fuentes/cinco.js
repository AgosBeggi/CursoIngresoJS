/*Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , 
que se puede pagar de todas las maneras
Si es América tiene un 15% de descuento y si ademas paga por débito 
se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga 
por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito 
se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, 
se recarga un 15% de impuesto al cheque*/

function mostrar() {

    const VALOR_DIA = 100;
    let continente;
    let formaDePago;
    let cantidadDias;

    let descuentoAmerica = 0;
    let descuentoAfrica = 0;
    let descuendoEuropa = 0;

    let precioTotal = 0;
    let precioFinal = 0;
    let recargo = 0;

    continente = document.getElementById("selecContinente").value;
    formaDePago = document.getElementById("selecPago").value;
    cantidadDias = parseInt(prompt("Ingrese la cantidad de días"));
    while (isNaN(cantidadDias) || cantidadDias < 1) {
        cantidadDias = parseInt(prompt("Error. Ingrese la cantidad de días"));
    }

    precioTotal = cantidadDias * VALOR_DIA;

    switch (continente) {
        case "América":
            //tiene un 15% de descuento 
            descuentoAmerica = 0.15;
            precioFinal = precioTotal - precioTotal * descuentoAmerica.toFixed(2);
            //si ademas paga por débito se le agrega un 10% mas de descuento
            if (formaDePago == "Débito") {
                descuentoAmerica = 25;
                precioFinal = precioTotal - precioTotal * descuentoAmerica.toFixed(2);
            }
            break;
        case "Oceania":
        case "África":
            //tiene un 30% de descuento
            descuentoAfrica = 0.30;
            precioFinal = precioTotal - precioTotal * descuentoAfrica.toFixed(2);
            //por mercadoPago o efectivo se le agrega un 15% mas de descuento
            if (formaDePago == "MercadoPago" || formaDePago == "Efectivo") {
                descuentoAfrica = 0.45;
                precioFinal = precioTotal - precioTotal * descuentoAfrica.toFixed(2);
            }
            break;
        case "Europa":
            //tiene un 20% de descuento
            descuendoEuropa = 0.20;
            precioFinal = precioTotal - precioTotal * descuendoEuropa.toFixed(2);
            //si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
            if (formaDePago == "Débito") {
                descuendoEuropa = 0.35;
                precioFinal = precioTotal - precioTotal * descuendoEuropa.toFixed(2);
            } else if (formaDePago == "MercadoPago") {
                descuendoEuropa = 0.30;
                precioFinal = precioTotal - precioTotal * descuendoEuropa.toFixed(2);
            } else {
                descuendoEuropa = 0.25;
                precioFinal = precioTotal - precioTotal * descuendoEuropa.toFixed(2);
            }
            break;
        default:
            //tiene un recargo del 20%
            recargo = 0.2;
            precioFinal = precioTotal + precioTotal * recargo.toFixed(2);
            //si paga con cheque, se recarga un 15% de impuesto al cheque
            if (formaDePago == "Cheque") {
                recargo = 0.15;
                precioFinal = precioTotal + precioTotal * recargo.toFixed(2);
            }
            break;
    }

    alert("El precio a pagar es $" + precioFinal);
}