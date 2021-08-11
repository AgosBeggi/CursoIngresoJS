function mostrar()
{
    let letra;
    let numero;
    let cantidadPar = 0;
    let cantidadImpar = 0;
    let cantidadCeros = 0;
    let cantidadPositivos = 0;
    let sumaPositivos = 0;
    let promedioPositivos;
    let sumaNegativos = 0;
    let letraMaximo;
    let numeroMaximo;
    let letraMinimo;
    let numeroMinimo;
    let flagPrimerIngreso = false;
    let condicion = "si";

    while (condicion == "si") {
        letra = prompt("Ingrese cualquier letra");
        numero = parseInt(prompt("Ingrese un número entre -100 y 100"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Ingrese un número entre -100 y 100"));
        }
        if (flagPrimerIngreso == false) {
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaximo = letra;
            letraMinimo = letra;
            flagPrimerIngreso = true;
        }
        if (numero > numeroMaximo) {
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        if (numero < numeroMinimo) {
            numeroMinimo = numero;
            letraMinimo = letra;
        }
        if (numero == 0) {
            cantidadCeros++;
        }
        else {
            if (numero > 0) {
                sumaPositivos = sumaPositivos + numero;
                cantidadPositivos++;
            }
            else {
                sumaNegativos = sumaNegativos + numero;
            }
        }
        if (numero % 2 == 0) {
            cantidadPar++;
        }
        else {
            cantidadImpar++;
        }
        console.log(letra);
        console.log(numero);
        condicion = prompt("¿Desea continuar? (Ingrese si o no)");
    }
    promedioPositivos = sumaPositivos / cantidadPositivos;

    console.log(cantidadPar);
    console.log(cantidadImpar);
    console.log(cantidadCeros);
    console.log(promedioPositivos);
    console.log(sumaNegativos);
    console.log(numeroMaximo + " " + letraMaximo + " " + numeroMinimo + " " + letraMinimo);
}