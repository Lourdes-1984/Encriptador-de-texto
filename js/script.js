const mensajeEncriptar = document.querySelector('.mensaje')
const mensajeEncriptado = document.querySelector('.mensaje-encriptado')
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none"


function btnEncriptar(){

        const textEncriptado = encriptar(mensajeEncriptar.value)
        mensajeEncriptado.value = textEncriptado
        mensajeEncriptar.value = '';
        mensajeEncriptado.style.backgroundImage = 'none' 
        copia.style.display = "block"
    
   
}

function encriptar(letras){
    let llavesEncriptacion = [['e', 'enter'],
                        ['i', 'imes'],
                        ['a', 'ai'],
                        ['o', 'ober'],
                        ['u', 'ufat']
]
      letras = letras.toLowerCase()
     
        for (let i = 0; i < llavesEncriptacion.length; i++) {
           if(letras.includes(llavesEncriptacion[i][0])){
                letras = letras.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1])
           }

        if(mensajeEncriptar === ''){
             alert('ingrese mensaje')
            }
            
        }
        
    

        return letras
       
}


function btnDesencriptar(){
    const textEncriptado = desencriptar(mensajeEncriptar.value)
    mensajeEncriptado.value = textEncriptado
    mensajeEncriptar.value = '';
    

}



function desencriptar(letrasDesencriptar){
    let llavesEncriptacion = [['e', 'enter'],
                        ['i', 'imes'],
                        ['a', 'ai'],
                        ['o', 'ober'],
                        ['u', 'ufat']
]
letrasDesencriptar = letrasDesencriptar.toLowerCase()

        for (let i = 0; i < llavesEncriptacion.length; i++) {
           if(letrasDesencriptar.includes(llavesEncriptacion[i][1])){
            letrasDesencriptar = letrasDesencriptar.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0])
           }
            
        }

        return letrasDesencriptar
}

function copiar(){
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value)
    mensajeEncriptado.value = "";
    alert("Texto Copiado")
}




