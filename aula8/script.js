//============================
// API DE CACHORROS 
// ============================

// Endereço da API que vamos utilizar 
const url = 'https://dog.ceo/api/breeds/image/random';
// pegando os elementos do HTML 

// Imagem pelo seu ID 
const fotoCachorro = document.getElementById("fotoCachorro")


const btnNovaFoto = document.getElementById("btnNovaFoto")

// função para buscar uma nova foto 


async function buscarFoto(){
    //fazer uma requisição para a API 
    const resposta = await fetch(url); 


    // converter a resposta da API para JSON 
    const dados = await resposta.json()
    //mostrar no console o que a API retornou

    // alterarmos o endereço da imgagem no HTML 
    fotoCachorro.src = dados.message;
}
// ===================================
// BOTÃO 
// ===================================
// Quando o usuário clicar no botão 
// Vamos executar a função buscarFoto ()
btnNovaFoto.addEventListener ('click', buscarFoto);

// Quando a página abrir, 
// Já buscamos uma foto automaticamente 
buscarFoto();
    