
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho=parseFloat(prompt("Ingrese el largo"));
    largo=parseFloat(prompt("Ingrese el largo"));

    perimetro=(ancho*2)+(largo*2);
    
    alert("El perímetro es: " + perimetro);
}
