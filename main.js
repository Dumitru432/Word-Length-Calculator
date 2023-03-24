let output = document.querySelector('.output')
let input = document.querySelector('.input')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    output.value = input.value.length
} )