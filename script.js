let botao_1 = document.querySelector('#btn-1')
let botao_2 = document.querySelector('#btn-2')
let botao_3 = document.querySelector('#btn-3')
let botao_4 = document.querySelector('#btn-4')
let botao_5 = document.querySelector('#btn-5')
let botao_6 = document.querySelector('#btn-6')
let botao_7 = document.querySelector('#btn-7')
let botao_8 = document.querySelector('#btn-8')
let botao_9 = document.querySelector('#btn-9')
let botao_0 = document.querySelector('#btn-0')
let botao_C = document.querySelector('#btn-C')
let botao_p = document.querySelector('#btn-point')
let botao_dif = document.querySelector('#btn-sub')
let botao_som = document.querySelector('#btn-sum')
let botao_multi = document.querySelector('#btn-mult')
let botao_dvd = document.querySelector('#btn-dvd')
let botao_igual = document.querySelector('#btn-equal')
let painel_cont = document.querySelector('#panel-content')

painel_cont.innerHTML = "0"

botao_1.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "1"
})

botao_2.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "2"
})

botao_3.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "3"
})

botao_4.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "4"
})

botao_5.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "5"
})

botao_6.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "6"
})

botao_7.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "7"
})

botao_8.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "8"
})

botao_9.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "9"
})


botao_0.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "0"
})

botao_C.addEventListener('click', () => {
    painel_cont.innerHTML = ""
})

botao_p.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "."
})

botao_dif.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "-"
})

botao_som.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "+"
})

botao_multi.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "*"
})

botao_dvd.addEventListener('click', () => {
    painel_cont.innerHTML = painel_cont.innerHTML + "/"
})

contPainel = painel_cont.innerHTML

function calcularResultado(conteudoPainel){
        painel_cont.innerHTML = eval(painel_cont.innerHTML);
        if ( painel_cont.innerHTML.length > 5 ){
            painel_cont.innerHTML = parseFloat(painel_cont.innerHTML).toFixed(2);
        }
        
}

botao_igual.addEventListener('click', () => {
    calcularResultado(contPainel)
})

button = document.querySelector('#trocar');

button.addEventListener('click', () => {
    const html = document.documentElement
    html.classList.toggle('light')
}
)



