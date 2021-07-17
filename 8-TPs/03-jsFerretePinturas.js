/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura 
en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en 
Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
//(32 °F − 32) × 5/9 = 0 °C
//txtIdTemperatura
{
	let temperatura;
    let gradosC;

    temperatura=parseInt(document.getElementById("txtIdTemperatura").value);
    gradosC=(temperatura-temperatura)*5/9;
    alert(temperatura + " Fahrenheit son " + gradosC + " Centígrados");
    
}

function CentigradosFahrenheit () 
//(32 °C × 9/5) + 32 = 89.6 °F

{
	let temperatura;
    let gradosF;

    temperatura=parseInt(document.getElementById("txtIdTemperatura").value);
    gradosF=temperatura*9/5+temperatura;
    alert(temperatura + " Centígrados son " + gradosF + " Fahrenheit");

}
