// funçoes em javascript

// o que é uma funçao??
//  Uma funçao é um bloco de codigo reutilizavel, criado para executar uma tarefa especifica.

//  analogia simples!!
//  voce vai colocar valores (parometros)
// ela processa
// devolve um resultado 

// =================
// estrutura basica de uma funçao
//============================

function nomedafunçao(parametro1, parametro2){
    // codigo que sera executado
    return resultado
}

// fuction =======> palavras-chave
// nomedafunçao
//  parametros=======> valores que a funçao recebe 
// return ======> valor que a funçao devolve

// 5 exemplos 

// 1-somar dois numeros

function somar (a, b) {

return a + b; 
}

console.log (somar(2,15))

// 2- coverter real para dólar 
function realparadolar (valorreal, cotaçao){
    return valorreal / cotaçao;
}

console.log (realparadolar(10,5.20).toFixed(2))

// 3- converter dolar para real
function  dolarparareal (valordolar, cotaçao){
    return valordolar * cotaçao;

}
console.log(dolarparareal(10, 25.5). toFixed(2))

// 4 - Aumento de salario (Voce merece 25% de aumento)
function aumentoSalario (valorSalario, aumento) {
        return valorSalario + (valorSalario * 0.25);
    }

console.log (aumentoSalario (1650));

// 5- verifique se é par ou impar?
function parouimpar (numero){
    if (numero % 2 === 0){
        return "o numero é par.";
    }else{
    return "o numero é impar.";
        }
    }
console.log (parouimpar(10));
console.log (parouimpar(5));
