/*
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres
    let precio1;
    let precio2;
    let precio3;
    let resultado;
    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    resultado=precio1+precio2+precio3;
    alert("El resultado de la suma es $" + resultado);

}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;
    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma=precio1+precio2+precio3;
    promedio=suma/3;
    alert("El promedio es $" + promedio.toFixed(2));
    // el .toFixed(2) hace que se muestren hasta dos decimales
    // si pongo .toFixed(3), va a mostrar 3 decimales
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    
    let porcentaje;
    let total;
    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma=precio1+precio2+precio3;
    porcentaje=suma*21/100;
    total=suma+porcentaje;
    alert("El precio final es $" + total);
}