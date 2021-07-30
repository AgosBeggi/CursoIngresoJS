function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let respuesta;
    let temperaturaPar=0;
    let pesoMax;
    let pesoMin;
    let marcaMax;
    let productosBajoCero=0;
    let pesoTotal=0;
    let promedio;
    let contador=0;
    let flag=true;

    do {
        marca = prompt("Ingrese la marca del producto");
        console.log("marcas: " + marca);
        peso = parseInt(prompt("Ingrese el peso del producto \n(entre 1 y 100)"));
        while (!(peso >= 1 && peso <= 100)) {
            peso = parseInt(prompt("Peso incorrecto. Ingrese un peso \n(entre 1 y 100)"));
        }
        console.log("pesos ingresados: " + peso);
        temperatura = parseInt(prompt("Ingrese la temperatura del producto \n(entre -30 y 30)"));
        while (!(temperatura >= -30 && temperatura <= 30)) {
            temperatura = parseInt(prompt("Temperatura incorrecto. Ingrese la temperatura \n(entre -30 y 30)"));
        }
        console.log("temperaturas ingresadas: " + temperatura);
        if (flag == true) {
            pesoMax = peso;
            pesoMin = peso;
            flag = false;
        }
        if(temperatura<0){
            productosBajoCero++;
        }
        if (temperatura % 2 == 0) {
            temperaturaPar++;
        }
        if (peso > pesoMax) {
            pesoMax=peso;
            marcaMax = marca;
        }
        else if(peso<pesoMin){
            pesoMin=peso;
        }
        pesoTotal=pesoTotal+peso;
        contador++;
        respuesta = prompt("¿Desea ingresar mas datos?");
    } while (respuesta != "N" && respuesta != "n");

    promedio = pesoTotal / contador;//mal

    console.log("Cantidad de temperaturas pares: " + temperaturaPar);
    console.log("La marca del producto más pesado ingresado es: " + marcaMax);
    console.log("La cantidad de productos que se conservan a temperaturas bajo cero es: " + productosBajoCero);
    console.log("Promedio del peso de todos los productos es: " + promedio);
    console.log("El peso máximo ingresado es: " + pesoMax + "\nEl peso mínimo ingresado es: " + pesoMin);
}
