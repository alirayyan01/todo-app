let input = document.getElementById('input')
let list = document.getElementById('list')

function addTodos() {
    if (input.value == '') return;
    // list.innerHTML += `<li>${input.value} <button onclick='this.parentNode.remove()'>remove</button></li>`
    list.innerHTML += `<li>${input.value} <button onclick='del(this)'>remove</button></li>`
    input.value = ''
}
function clr() {
    list.innerHTML = ''
}
function del(e) {
    e.parentNode.remove()
}
function key1(e) {
    if (e.key == 'Enter') {
        addTodos()
    }
}