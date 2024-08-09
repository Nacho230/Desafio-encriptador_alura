let textoInput = document.getElementById("texto_encriptado");

textoInput.addEventListener("input", function () {
    let value = this.value;
    this.value = value.replace(/[^a-z]/g, '');
});

function encriptarMensaje() {
    let textoIntroducido = textoInput.value;
    if (textoIntroducido.trim() === "") {
        alert("Por favor, introduce un texto");
    } else {
        encriptar();
        borrarInput();
    }
}

function borrarInput() {
    textoInput.value = "";
}

function encriptar() {
    let textoIntroducido = textoInput.value;
    let textoEncriptado = "";

    for (let i = 0; i < textoIntroducido.length; i++) {
        switch (textoIntroducido[i]) {
            case "a":
                textoEncriptado += "ai";
                break;
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += textoIntroducido[i];
        }
    }
    mostrarMensaje(textoEncriptado);
}

function mostrarMensaje(textoEncriptado) {
    let divContenedor = document.getElementById("contenido_resultado");


    let parrafoResultado = document.createElement("p");
    parrafoResultado.id = "texto_encriptado_resultado";
    parrafoResultado.textContent = textoEncriptado;


    divContenedor.innerHTML = "";
    divContenedor.appendChild(parrafoResultado);


    let botonCopiar = document.createElement("button");
    botonCopiar.id = "contenido_boton_copiar";
    botonCopiar.textContent = "Copiar";
    botonCopiar.onclick = copiarMensaje;


    divContenedor.appendChild(botonCopiar);
}

function desencriptarMensaje() {
    let textoIntroducido = textoInput.value;

    if (textoIntroducido.trim() === "") {
        alert("Por favor, introduce un texto");
    } else {
        textoIntroducido = textoIntroducido.replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        mostrarMensaje(textoIntroducido);
        borrarInput();
    }
}

function copiarMensaje() {
    let texto = document.getElementById("texto_encriptado_resultado").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado!");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}


// PARA EL NACHO DE MAÑANA, FALTA AJUSTAR EL TEXTO ENCRIPTADO Y AJUSTAR EL DISEÑO RESPONSIVE