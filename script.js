const menuHamburguer = document.querySelector(".hamburguer")
const fecharMenu = document.querySelector("#fechar")
const menu = document.querySelector("#menu1")

menuHamburguer.addEventListener("click", function() {
    menu.classList.remove("menu");
    menu.classList.add("menu-ativado");
    menuHamburguer.classList.add("desativado");
});

fecharMenu.addEventListener("click", function() {
    menu.classList.add("menu");
    menu.classList.remove("menu-ativado");
    menuHamburguer.classList.remove("desativado");
});

function alertarClique(elemento) {
    alert(elemento + " foi clicado");
}