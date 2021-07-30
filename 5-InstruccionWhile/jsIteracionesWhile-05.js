/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexoIngresado;

	do {
		sexoIngresado = prompt("Ingrese F si es femenino ó M si es masculino. (Respetar las mayúsculas)");
		//si pongo .value me tira undefined
	} while (sexoIngresado != "F" && sexoIngresado != "M");
	//no hay sango numérico, por eso es && no ||
	if (sexoIngresado == "F") {
		document.getElementById("txtIdSexo").value = "El sexo es " + sexoIngresado + "emenino";
	}
	else {
		document.getElementById("txtIdSexo").value = "El sexo es " + sexoIngresado + "asculino";
	}
}//FIN DE LA FUNCIÓN