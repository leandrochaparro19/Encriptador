
function myFunction() {
    document.getElementById("myDIV").style.display = "none";
}

const input=document.querySelector(".msj-input");
const output=document.querySelector(".msj-output");


function validacion(texto){
    let bool=false;
    if(/^[a-z\u00f1 \s]+$/.test(texto)==false){
        bool=true;
    }
    return bool;
}

function encriptar(texto){
    let codigos=["enter","imes","ai","ober","ufat"];
    let vocales=["e","i","a","o","u"];
    for(let i=1;i<vocales.length;i++){
        if(texto.includes(vocales[i])){
            texto=texto.replaceAll(vocales[i],codigos[i]);
        }
    }

    return texto;
}

function desencriptar(texto){
    let codigos=["enter","imes","ai","ober","ufat"];
    let vocales=["e","i","a","o","u"];
    texto=texto.toLowerCase();

    for(let i=0;i<vocales.length;i++){
        if(texto.includes(codigos[i])){
            texto=texto.replaceAll(codigos[i],vocales[i]);
        }
    }

    return texto;
}

function btnEncriptar(){
    let validar=validacion(input.value);
    if(input.value.length>0 && validar==false){
    const textoEncriptado = encriptar(input.value);
    myFunction();
    output.value=textoEncriptado;
    input.value="";
    input.placeholder="Incerte aqui su texto"
    }else
    if(validar==true && input.value.length>0){
        input.value="";
        input.placeholder="Debe ingresar letras minusculas, sin caracteres especiales ni acentos"
        output.value="";
        document.getElementById("myDIV").style.display = "flex";
    }else
    if(input.value.length==0){
        input.placeholder="Incerte aqui su texto";
        output.value="";
        document.getElementById("myDIV").style.display = "flex";
    }
}

function btnDesencriptar(){
    let validar=validacion(input.value);
    if(input.value.length>0 && validar==false){
    const textoDesencriptado = desencriptar(input.value);
    myFunction();
    output.value=textoDesencriptado;
    input.value="";
    input.placeholder="Incerte aqui su texto"
    }else
    if(validar==true && input.value.length>0){
        input.value="";
        input.placeholder="Debe ingresar letras minusculas, sin caracteres especiales ni acentos"
        output.value="";
        document.getElementById("myDIV").style.display = "flex";
    }else
    if(input.value.length==0){
        input.placeholder="Incerte aqui su texto";
        output.value="";
        document.getElementById("myDIV").style.display = "flex";
    }
}

function btnCopiar(){
    output.select();
    navigator.clipboard.writeText(output.value);
    document.getElementById("myDIV").style.display = "flex";
    output.value="";
}

