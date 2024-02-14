/*
const $produto = document.querySelector('#produto')
const $lista  = document.querySelector('ul')
const $botao = document.querySelector('.btn')

function cadastrar(){
    let item = '<li>' + $produto.value + '</li>'
    $lista.innerHTML += item
    $produto.value = ''

}
*/




function cadastrar(){
    
const produto = document.querySelector('#produto')
const lista = document.querySelector('ul')
const btn = document.querySelector('.btn')

    const novaLista = document.createElement('li')
    novaLista.innerHTML = produto.value
    lista.appendChild(novaLista)
    produto.value = ''

    novaLista.addEventListener('click', function(){
        novaLista.setAttribute('li')
        novaLista.add(riscado)
    })
    
    
    
}





  

    

 




