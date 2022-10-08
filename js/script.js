const button = document.getElementById('btn')
const list = document.getElementById('list')
const info = document.getElementById('input')

let createElement = function(){
    let element = document.createElement("div")
    element.className = "list-element"
    element.innerHTML = info.value
    list.appendChild(element)

    let done = document.createElement("i")
    done.className = "fa-solid fa-check"
  
    let close = document.createElement("span")
    close.className = "emenet__remove"
    close.innerHTML = "x"
    close.style.cursor = "pointer"
    element.appendChild(close)
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
    })

    close.addEventListener('click', function() {
        element.remove()
    })
}

button.addEventListener('click', function() {
    createElement()
})
info.addEventListener('keyup', function(el) {
if (el.code === 'Enter') { button.click()}
})
