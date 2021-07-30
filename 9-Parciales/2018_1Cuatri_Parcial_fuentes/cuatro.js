function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno=parseInt(prompt("ingrese un número"));
    numeroDos=parseInt(prompt("ingrese otro número"));
    

    if(numeroUno==numeroDos){
        alert("Los números ingresados son:" + "\n" + numeroUno + "-" + numeroDos);
    }
    else if(numeroUno>numeroDos){
        resultado=numeroUno-numeroDos;
        alert("El resultado de la resta de los números es:" + "\n" + resultado);
    }
    else{
        resultado=numeroUno+numeroDos;
        if(resultado>10){
            alert("La suma es " + resultado + " y supero el 10");
        }
        else{
            alert("El resultado de la suma de los números es:" + "\n" + resultado);
        }
    }
}
