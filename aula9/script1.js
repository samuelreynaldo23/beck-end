/*
==========================================
FRONT-END - consome nossa API local 
==========================================

Este arquivo roda no navegador.
Ele faz requisições para a nossa API Node.js 
e mostra os dados na tela 
*/

const { log } = require("console");

// ===============================
// ELEMENTOS DO HTML
// ===============================
// foto do cachorro
const dogImage = document.getElementById("dogImage");
// nome raça
const breedName = document.getElementById("breedName");
// cachorro aleatório 
const randomBtn = document.getElementById("randomBtn");
// botão que busca cachorro pro raça
const searchBtn = document.getElementById("searchBtn");
// campo de texto onde o usuário digita a raça
const breedInput = document.getElementById("breedInput");
// area onde fica a imagem do cachorro
// usamos querySelector porque é uma classe(.dog-area)
const dogArea = document.querySelector(".dog-area");

// ===============================
// URL DA API
// ===============================

const API = "http://localhost:300/api/cachorros";

// ===============================
// função principal 
// ===============================

async function buscaCachorro(url) {
    dogArea.classList.add("loading");
    try{
 const response = await fetch(url);
 //converte a resposta para JSON 
 const data = await response.json();
 console.log("resposta da API:", data)
 //vamos verficar se a API retornou erro 
 if (data.status === "error"){
    breedName.textContent = data.message;
    dogImage.src = "";

    return;
 }
 //coloca a imagem do cachorro na tela 
 // o src define qual imagem sera exibida
 dogImage.src = data.message;
 const partes = data.message.split("/")
 const raca = partes [5]
 breedName.textContent = 
 raca.CharAt(0).toUpperCase() + raca.slice(1);


    }catch (erro){
//caso o servidor esteja desligado 
//ou aconteça algum erro na requisição 
console.error(erro);
//mostra mensagem na tela 
breedName.textContent = 
"📴servidor offline - rode : node server.js"
dogImage.src = "";
    }finally{
        dogArea.classList.remove("loading")
    }
 
}