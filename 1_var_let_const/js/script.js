/**
 * var nome = 'Luiz';
 */
let nome = 'Pedro';

/**
 * let nome = 'Rodrigo';
 * 
 * Uncaught Syntax Error: Identifier 'nome' has already been declared
 * Erro de sintaxe não identificado: o identificador 'nome' já foi declarado
 */

function dizerNome(){
    //var nome = 'João';
    let nome = 'José';
    console.log("O nome é " + nome);
}
/**
 * if(true){
    var nome = 'Salete';
} 
 */
if(true){
    let nome = 'Salete';
}

console.log(nome);
dizerNome();

for(let i = 0; i < 3; i++){
    let nome = 'Anísio';
    console.log(nome);
}