const imgMenor1 = document.querySelector("#imgMenor1")
const imgMenor2 = document.querySelector("#imgMenor2")
const imgMenor3 = document.querySelector("#imgMenor3")
const imgMaior = document.querySelector("#imgMaior")

imgMenor1.addEventListener("click", function() {
    imgMaior.src = "../../imagens/Produto/Barcelona/Barcelona(2).png"
});

imgMenor2.addEventListener("click", function() {
    imgMaior.src = "../../imagens/Produto/Barcelona/Barcelona(1).png"
});

imgMenor3.addEventListener("click", function() {
    imgMaior.src = "../../imagens/Produto/Barcelona/Barcelona(3).png"
});