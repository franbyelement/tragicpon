const sectionSeleccionarAtaques = document.getElementById("seleccion-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMokeponJugador = document.getElementById("boton-mokepon")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")


const sectionSeleccionMokepon = document.getElementById("seleccion-mokepon")
const spanMokeponJugador = document.getElementById("mokepon-jugador")

const spanMokeponEnemigo = document.getElementById("mokepon-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge 
let inputRatigueya
let inputCapipepo 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', 'mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', 'mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', 'mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {
    sectionSeleccionarAtaques.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones =`<input type="radio" name="mokepon" id=${mokepon.nombre} />    
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>`

    contenedorTarjetas.innerHTML += opcionDeMokepones
    
    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    })

    sectionReiniciar.style.display = "none"

    botonMokeponJugador.addEventListener("click", seleccionmokeponjugador)

    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionmokeponjugador() {
    sectionSeleccionMokepon.style.display = "none"

    sectionSeleccionarAtaques.style.display = "flex"

    if (inputHipodoge.checked) {
        spanMokeponJugador.innerHTML = inputHipodoge.id
    } else if (inputRatigueya.checked) {
        spanMokeponJugador.innerHTML = inputRatigueya.id
    } else if (inputCapipepo.checked) {
        spanMokeponJugador.innerHTML = inputCapipepo.id
    } else {
        alert("selecciona a un mokepon")
    }

    eleccionMokeponEnemigo()
}

function eleccionMokeponEnemigo() {
    let eleccionMokeponEnemigo = aleatorio(0, mokepones.length -1)
    
    spanMokeponEnemigo.innerHTML =  mokepones[eleccionMokeponEnemigo].nombre
}

function ataqueFuego() {
    ataqueJugador = "fuego 🔥"
    ataqueAleatorioEnemigo()

}

function ataqueAgua() {
    ataqueJugador = "agua 💧"
    ataqueAleatorioEnemigo()

}

function ataqueTierra() {
    ataqueJugador = "tierra 🌱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAletorio = aleatorio(1, 3)

    if (ataqueAletorio == 1) {
        ataqueEnemigo = "fuego 🔥"
    } else if (ataqueAletorio == 2) {
        ataqueEnemigo = "agua 💧"
    } else {
        ataqueEnemigo = "tierra 🌱"
    }

    combate()

}

function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE!!!")
    } else if (ataqueJugador == "fuego 🔥" && ataqueEnemigo == "tierra 🌱") {
        crearMensaje("tu mokepon utilizo fuego, mokepon enemigo utilizo agua ... ganaste!!!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "agua 💧" && ataqueEnemigo == "fuego 🔥") {
        crearMensaje("tu mokepon utilizo agua, mokepon enemigo utilizo fuego ... ganaste!!!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "tierra 🌱" && ataqueEnemigo == "agua 💧") {
        crearMensaje("tu mokepon utilizo tierra, mokepon enemigo utilizo agua ... ganaste!!!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje(", perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("enhorabuena ganas el combate!!!👏👏👏")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento has perdido el combate 😭")
    }
}

function crearMensaje(resultado) {
   

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {

    location.reload()

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
