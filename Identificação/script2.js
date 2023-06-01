const listaPerfil = document.querySelector("#lista-perfil")
const avatar = document.querySelector("#perfil")
const fechar = document.querySelector("#fechar-perfil")

avatar.addEventListener("click", function() {
    listaPerfil.classList.remove("desliga");
    listaPerfil.classList.add("menu-perfil");
});

fechar.addEventListener("click", function() {
    listaPerfil.classList.add("desliga");
    listaPerfil.classList.remove("menu-perfil");
});