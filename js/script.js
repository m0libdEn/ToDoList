const button = document.getElementById('btn')
const list = document.getElementById('list')
const info = document.getElementById('input')

let todo = function(){
    let element = document.createElement("div")
    element.className = "list-element"
    element.innerHTML = info.value
    list.appendChild(element)
}

button.addEventListener('click', todo)
info.addEventListener('keyup', function(el) {
if (el.code === 'Enter') { button.click()}
})
