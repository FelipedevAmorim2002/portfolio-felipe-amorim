const cursos = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
let lista = "";

for(curso of cursos) {
    lista = lista + curso + "\n";
}
alert(lista);

   
const botao = document.querySelector(".botao");
const titulo = document.querySelector("h1");

botao.addEventListener("click", function() {
    titulo.textContent = "Bem-vindo ao meu site!";
    titulo.classList.toggle("destaque");
});