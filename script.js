let div = `<div class="content">
<input type="search" id="search" placeholder="Search...">
<i class="fas fa-search"></i>
</div>`;

document.body.innerHTML += div;

let icone = document.querySelector('i');
let inp = document.querySelector('input');
console.log(inp)

icone.onclick = function () {
    inp.classList.toggle('search');
}