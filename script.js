let icone = document.querySelector('i');
let inp = document.querySelector('input');
console.log(inp)

icone.onclick = function () {
    inp.classList.toggle('search');
}