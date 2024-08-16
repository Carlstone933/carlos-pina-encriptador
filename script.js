const textArea = document.querySelector(".text-area");
const Mensaje  = document.querySelector(".mensaje");
document.querySelector(".copiar").addEventListener("click", copiarTexto);


function btnEncriptar(){
    const textoEncriptado = encriptar (textArea.value)
    Mensaje.value = textoEncriptado
    textArea.value = "";
    Mensaje.style.backgroundImage = "none";
    document.querySelector(".copiar").classList.remove("oculto")
}

function encriptar(srtringencrptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    srtringencrptado =  srtringencrptado.toLowerCase()

    for(let i = 0; i< matrizCodigo.length; i++){
        if(srtringencrptado.includes(matrizCodigo[i][0])){
            srtringencrptado = srtringencrptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
             }

    }
    return srtringencrptado
}


    function btnDesencriptar(){
    const textoEncriptado = desencriptar (textArea.value)
    Mensaje.value = textoEncriptado
    textArea.value = "";
    Mensaje.style.backgroundImage = "none";
 }


function desencriptar(srtringdesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    srtringdesencriptado =  srtringdesencriptado.toLowerCase()

    for(let i = 0; i< matrizCodigo.length; i++){
        if(srtringdesencriptado.includes(matrizCodigo[i][1])){
            srtringdesencriptado = srtringdesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
             }

    }
    return srtringdesencriptado
} 

function copiar(){

}

function copiarTexto() {
    Mensaje.select();
    Mensaje.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
}