// selecinado elementos do dom 
// =======================
console.log (document.getElementById("titulo")); 
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste")

let caixas = document.getElementByIdClassName ("box");
console.log("titulo");
console.log("caixas");
console.log("imagem");

// ================
// Função para alterar conteudo

function alterar(){
    titulo.innerHTML = "Jarvis dominou tudo!🤖"
    subtitulo.innerText = "Só que não!"
}