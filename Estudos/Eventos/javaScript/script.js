//criando as constantes para os elementos do html
const btn = document.getElementById("myButton");
const btn2 = document.getElementById("btn");
const removerEvent = document.getElementById("otherBtn");
const myTitle = document.getElementById("myTitle")
const containerBtn = document.getElementById("btnContainer")
const bntInsideContainer = document.getElementById("divBtn")
const a = document.getElementById("link")
const mouseEvents = document.getElementById("mouse")
const myInput = document.getElementById("input")

// 1 - Adicionando Eventos
function imprimir() {
    console.log("Fui clicado")
}
btn.addEventListener("click", imprimir)
// 2 - Removendo Eventos
// adicionado evento ao btn2
btn2.addEventListener("click", imprimir)

// adicionando o evento ao otherBtn para remover o evento do btn2
removerEvent.addEventListener("click", () => {
    console.log("O Evento foi removido, não funciona mais")
    btn2.removeEventListener("click", imprimir)
})


// 3 - Argumento do evento
myTitle.addEventListener("click", (event) => {
    console.log(event)
})

// 4 - propagação de eventos
// ao clicar no container , chama o evento do container, e acaba propagando para o botão dentro do container
containerBtn.addEventListener("click", () => {
    console.log("Evento do container")
})

// evento do botão dentro do container
bntInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation() // para a propagação do evento, ou seja, o evento do container não é acionado
    console.log("Evento do botão dentro do container")
})

a.addEventListener("click", (e) => {
    e.preventDefault() // previne o comportamento padrão do link, ou seja, não redireciona para outra página
    console.log("O link não redireciona para outra página")
})

//6 - Eventos de teclado

document.addEventListener("keydown", (e) => {
    console.log(`A tecla ${e.key} foi pressionada`)
})

// 7 - Eventos de mouse

mouseEvents.addEventListener("mousedown", () => {
    console.log("O mouse foi pressionado")
})
mouseEvents.addEventListener("mouseup", () => {
    console.log("O mouse foi solto")
})
mouseEvents.addEventListener("dblclick", () => {
    console.log("O mouse foi clicado duas vezes")
})
mouseEvents.addEventListener("mouseover", () => {
    console.log("O mouse está sobre o elemento")
})
mouseEvents.addEventListener("mouseout", () => {
    console.log("O mouse saiu do elemento")
})
// 7.5 - Evento de scroll
/*  window.addEventListener("scroll", ()=>{
    console.log("usou scroll do mouse")
 })
 */
// 8 - Movimento do mouse
/*document.addEventListener("mousemove", (e)=>{
   console.log(`eixo X: ${e.x}`)
   console.log(`eixo Y: ${e.y}`)
 })*/


//10 - Evento de focus/blur

myInput.addEventListener("focus", () => {
    console.log("O input está focado")
})

myInput.addEventListener("blur", () => {
    console.log("O input perdeu o foco")
})

//11 - Evento de carregamento
window.addEventListener("load", () => {
    console.log("A página foi carregada")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault() // previne o comportamento padrão de fechar a página
    e.returnValue = "" // exibe uma mensagem de confirmação para o usuário antes de fechar a página
})

//12 - debounce

const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}
// o evento de mousemove 
// só será acionado após 500ms que o mouse parar de se mover)
window.addEventListener("mousemove", debounce(() => {
    console.log("Executando de tempos em tempos")
}, 300)
)