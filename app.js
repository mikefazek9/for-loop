// select btn
let btn = document.querySelector("#btn")
let section = document.querySelector("section")

for(let i =0; i < 10; i++){
 let newBtn = document.createElement("button")
 newBtn.classList.add("btn")
 newBtn.innerHTML= 'click me'
 section.appendChild(newBtn)
}