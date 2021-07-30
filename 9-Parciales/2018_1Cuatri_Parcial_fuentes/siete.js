function mostrar()
{
    let notas;
    let sexo='';
    let i;//cuando esta variable se usa fuera del for también
    //hay que declararla antes porque sino nace y muere en el for
    let flag=true;
    let notaMinima;
    let sexoMinimo;
    let sumaNotas=0;
    let promedio;
    let varones=0;

    for (i = 0; i < 4; i++) {
        notas = parseInt(prompt("Ingrese una nota de 0 a 10"));
        while (!(notas >= 0 && notas <= 10)) {
            notas = prompt("Nota incorrecta. \nIngrese una nota de 0 a 10");
        }
        sexo = prompt("Indique el sexo del/la alumno/a");
        while (sexo !== 'f' && sexo !== 'F' && sexo !== 'm' && sexo !== 'M') {
            sexo = prompt("Sexo incorrecto. \nIndique el sexo del/la alumno/a")
        }
        if(flag==true){
            notaMinima=notas;
            flag=false;
        }
        if(notaMinima>notas){
            notaMinima=notas;
            sexoMinimo=sexo;
        }
        if(sexo==='m' || sexo==='M' && notas>6){
            varones++;
        }
        sumaNotas=sumaNotas+notas;
    }
    
    promedio=sumaNotas/i;
    alert("El promedio total de las notas ingresadas es: " + promedio);
    alert("La nota mas baja es: " + notaMinima + ", y coresponde al sexo " + sexoMinimo);
    alert("La cantidad de varones aprobados es: " + varones);
}
