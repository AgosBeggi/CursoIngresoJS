/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //txtIdLargo
    //txtIdAncho
    //txtIdRadio
    let largo;
    let ancho;
    let perimetro;
    let totalHilos;

    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    perimetro=(largo+ancho)*2;
    totalHilos=perimetro*3;
    alert("La cantidad de hilos es "+ totalHilos) + "m";

}
function Circulo () 
{
	let radio;
    let circunferencia;
    let totalHilos;
    radio=parseFloat(document.getElementById("txtIdRadio").value);
    circunferencia=2*3.14*radio;
    totalHilos=radio*3;
    alert("La cantidad de hilos que se necesita es " + totalHilos + "m");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let totalCemento;
    let totalCal;

    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);
    area=largo*ancho;
    totalCemento=area*2;
    totalCal=area*3;
    alert("La cantidad de bolsas de cemento es "+ totalCemento + " y la cantidad de bolsasde cal es " + totalCal);
}