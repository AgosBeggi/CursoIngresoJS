function mostrar()
/*Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".*/ {
    //laHora
    let hora;

    hora=parseInt(document.getElementById("laHora").value);

    switch (hora) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
            break;
        case 20:
        case 21:
        case 22:
        case 23:
            alert("A dormir!");
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            alert("Es de noche");
            break;
        default:
            if(hora>24){
                alert("Esa hora no es correcta");
            }
            else{
                alert("Es de tarde");
            }
            break;
    }

}
