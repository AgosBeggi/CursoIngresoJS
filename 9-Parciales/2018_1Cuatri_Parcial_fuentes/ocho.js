function mostrar() {
    let letra;
    let numero;
    let ceros = 0;
    let pares = 0;
    let impares = 0;
    let respuesta = "S";
    let contadorPositivos = 0;
    let acumuladorPositivos = 0;
    let contadorNegativos = 0;
    let acumuladorNegativos = 0;
    let promedio;
    let flag = true;
    let maximo = 0;
    let minimo = 0;
    let letraMax;
    let letraMin;


    do {
        letra = prompt("Ingrese una letra");
        while (letra.length != 1) {
            letra = prompt("Ingresó más de una letra. \nIngrese sólo una letra")
        }
        numero = parseInt(prompt("Ingrese un número \n(entre -100 y 100)"));
        while (!(numero >= -100 && numero <= 100)) {
            numero = parseInt(prompt("Número incorrecto. Ingrese un número \n(entre -100 y 100)"));
        }
        if (flag == true) {
            maximo = numero;
            minimo = numero;
            letraMax= letra;
            letraMin= letra;
            flag = false;
        }

        if (numero % 2 == 0) {
            pares++;
        }
        else {
            impares++;
        }

        if (numero == 0) {
            ceros++;
        } else if (numero > 0) {
            contadorPositivos++;
            acumuladorPositivos = acumuladorPositivos + numero;
                if (numero > maximo) {
                maximo = numero;
                letraMax = letra;
            }
        } else {
            contadorNegativos++;
            acumuladorNegativos = acumuladorNegativos + numero;
            if (numero < minimo) {
                minimo = numero;
                letraMin = letra;
            }
        }
        respuesta = prompt("¿Desea ingresar mas datos?");
    } while (respuesta != "N" && respuesta != "n");
    promedio = acumuladorPositivos / contadorPositivos;
    document.write("Cantidad de números pares: " + pares);
    document.write("<br>" + "Cantidad de números impares: " + impares);
    document.write("<br>" + "Cantidad de ceros: " + ceros);
    document.write("<br>" + "Promedio de los números positivos: " + promedio);
    document.write("<br>" + "La suma de los números negativos: " + acumuladorNegativos);
    document.write("<br>" + "La letra del número máximo ingresado (" + maximo + "), es: " + letraMax);
    document.write("<br>" + "La letra del número mínimo ingresado (" + minimo + "), es: " + letraMin);
}
