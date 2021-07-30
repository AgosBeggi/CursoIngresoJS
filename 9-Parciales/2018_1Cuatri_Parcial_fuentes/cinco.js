function mostrar()
{
    let planetas;

    planetas=prompt("Ingrese el nombre de un planeta del Sistema Solar");

    switch(planetas){
        case "sol":
        case "mercurio":
        case "venus":
            alert("Acá hace calor");
            break;
        case "tierra":
            alert("Acá vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
            alert("Acá hace frio");
            break;
        default:
            alert("El noimbre ingresado no es válido");
    }
}
