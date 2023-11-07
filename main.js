console.log('hola');
var persona ={
    nombre,
    apellido,
    sexo,
    email,
    celular,
    comentario
}

function guardar(){
    let nombre = document.getElementById("nombreIngresado").value;
    let apellido = document.getElementById("apellidoIngresado").value;
    let sexo = document.getElementById("sexoIngresado").value;
    let email = document.getElementById("emailIngresado").value;
    let celular = document.getElementById("celularIngresado").value;
    let comentario = document.getElementById("comentarioIngresado").value;
    // document.getElementById("nombre").innerHTML = nombre ;
    // document.getElementById("apellido").innerHTML = apellido ;
    // document.getElementById("sexo").innerHTML = sexo ;
    // document.getElementById("email").innerHTML = email ;
    // document.getElementById("celular").innerHTML = celular ;
    // document.getElementById("comentario").innerHTML = comentario ;


    let persona ={
        nombre,
        apellido,
        sexo,
        email,
        celular,
        comentario
    }
    console.log(persona);
aumentarContador();
}
var contador = 0;

function aumentarContador() {
    contador++;
    document.getElementById("counterJS").textContent = contador;
    counterJS.textContent = contador;
}

