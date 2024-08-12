


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


const textoIzquierda = document.getElementById("textoIzquierda")
const textoEncriptado = document.getElementById("textoEncriptado")

const btnEncriptar = document.getElementById("btnEncriptar")
const btnDesencriptar = document.getElementById("btnDesencriptar")
const btnCopiar = document.getElementById("btnCopiar")
const regex = /[a,e,i,o,u]/gi
const regex2 = /(ai|enter|imes|ober|ufat)/gi

const obj = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"

}

const objInv = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"

}

function copiar(){
    navigator.clipboard.writeText(textoEncriptado.innerText).then(() => {
        console.log('contenido copiado')
    })   
    
}

function encriptar(){
    textoEncriptado.innerText =  textoIzquierda.value.replaceAll(regex, function(matched){
        return obj[matched]
    })  
   
}

function desencriptar(){
    textoEncriptado.innerText =   textoIzquierda.value.replaceAll(regex2, function(matched){
        return objInv[matched]
    })  

}
const clickear = () => {
    if (!textoIzquierda.value) {
        textoEncriptado.innerText = "Ningun texto fue encontrado. Por favor ingresa el texto que deseas encriptar/desencriptar"
        textoEncriptado.classList.add("vacio")
        
    }else{
        const textoIzquierdaMin = textoIzquierda.value.toLowerCase()
        
        if (textoIzquierdaMin != textoIzquierda.value) {
            console.log("solo texto en minusculas")
        }
        encriptar()
        textoEncriptado.classList.remove("vacio")
    }

}

btnEncriptar.addEventListener("click", clickear)

btnDesencriptar.addEventListener("click",desencriptar)
btnCopiar.addEventListener("click",copiar)

