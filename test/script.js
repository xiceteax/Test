let count = 1
document.getElementById('add').addEventListener('click', function myFuncion () {
let cont = document.getElementById('container') 
let cont2 = document.createElement('div')
let cont3 = document.createElement('div')
let title = document.getElementById('game')
let txt = document.createElement('h2')
let number = document.createElement('h1') 
let button1 = document.createElement('button')
let button2 = document.createElement('button')
let count2 = document.getElementById('count')
let checkbox = document.createElement('input')



button1.textContent = 'UP'
button2.textContent = 'DOWN'
txt.textContent = title.value
number.textContent = count+'.'
count2.textContent = count

button1.classList.add('up')
button2.classList.add('down')
cont2.classList.add('container2')
cont3.classList.add('container3')
number.classList.add('number')
checkbox.classList.add('box')

checkbox.setAttribute('type', 'checkbox')

cont.appendChild(cont2)
cont2.appendChild(number)
cont2.appendChild(txt)
cont2.appendChild(cont3)
cont2.appendChild(checkbox)
cont3.appendChild(button1)
cont3.appendChild(button2)


count++

})

document.querySelector('box').addEventListener('click', function myFuncion2( box == true ) {
    let list =   document.querySelectorAll('conainer2')
})









// //--document.querySelector('up').addEventListener('click', function myFuncion2 (){
// let list =   document.querySelectorAll('conainer2')

// //let container2 = document.querySelectorAll("container2");
// //let prints = document.querySelectorAll("container2 > number");
// let closes = document.querySelectorAll(".close");

// myButtons.forEach((buttonSelected, id) => {
//   buttonSelected.addEventListener("click", () => {
//     prints[id].value = id + 1;
//     myInputs[id].classList.add("active");
//   })
// })

// closes.forEach(close => close.addEventListener('click', () => close.parentNode.classList.remove('active')));
// })
