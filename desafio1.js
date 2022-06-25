"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
//Modo 1
let pessoa = {
    codigo: 10,
    nome: "John"
};
//Modo 2
let pessoa2 = {
    codigo: 10,
    nome: "John"
};
//Modo 3 - Criando uma funcão passando a variaveis no parametro e tipando as variaveis.
function pessoa3(codigo, nome) {
    return `Codigo = ${codigo} \n  Nome = ${nome}`;
}
//Colocando os valor no paramentro da função selecionada
console.log(pessoa3(10, 'John'));
//Modo 4 Também em variaveis constante.
const passoa4 = {
    codigo: 10,
    nome: 'Jonh'
};
const funcionario = {};
funcionario.codigo = 10;
funcionario.nome = 'Jonh';
//Modo 6 - Ainda unsando a interface acima.
const funcionario2 = {
    codigo: 10,
    nome: 'Jonh'
};
