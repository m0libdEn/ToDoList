const button = document.getElementById('btn')
const list = document.getElementById('list')
const info = document.getElementById('input')

let createElement = function(){
    let element = document.createElement("div")
    element.className = "list-element"
    element.innerHTML = info.value
    let done = document.createElement("i")
    done.className="fas fa-check-square"
    done.style.display = "none"
    list.appendChild(element)
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
    })
    element.before(done)
}

button.addEventListener('click', function() {
    createElement()
})
info.addEventListener('keyup', function(el) {
if (el.code === 'Enter') { button.click()}
})
