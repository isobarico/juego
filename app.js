/* Con el QuerySelector estamos seleccionando */

let numeroSecreto = 0;
let intentos = 0;
let numerosUsados = [];
let numeroMaximo = 10;
//
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function generarNumeroSecreto(){
   numeroGenerado = Math.floor(Math.random() *10) + 1;
    if (numerosUsados.length == numeroMaximo){
        asignarTextoElemento('p','YA SE ACABO EL JUEGOO');
    } else {
        if (numerosUsados.includes(numeroGenerado)){
                return generarNumeroSecreto();
        } else { numerosUsados.push(numeroGenerado);
                return numeroGenerado;
            }

    }

  

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}
function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}


condicionesIniciales()

/* Aqui estamos conteniendo el valor que agregamos en el input, Valor Usuario es la id
de ese valor que tenemos en el input en html, con el document get elemnetbyid estamos recuperando ese valor
y almacenandolo en una variable, la variable numero de Usuario, este valor se guarda y podemos corroborar que esta
guardandose correctamente con el console.log*/

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numerosUsados);
    /* Aqui podemos evidenciar la pontencia q tiene el operador ternario, le damos dos valor a un string dependiendo
    de si se cumple o no una condicion*/
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertarste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
        
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');

        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

/* Con esta funcion vamos a limpiar la caja para poder colocar un nuevo valor, lo que hicimos fue crear una funcion
con una nueva variable q sera la q retorne limpiando la caja, guardamos en caja vacia el documentqueryselector de valor
usuario, si vemos aqui, tiene un gato, es hace referencia a que estamos tomando el inputdesde su ID, y el value '' le esta 
dando un valor de 0*/
function limpiarCaja() {
    let cajaVacia = document.querySelector('#valorUsuario').value = '';
    return cajaVacia;
}

