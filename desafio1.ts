// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Modo 1
let pessoa: {codigo: number, nome: string} = {
    codigo: 10,
    nome: "John"
}

//Modo 2
let pessoa2 = {
    codigo: 10,
    nome: "John"
}

//Modo 3 - Criando uma funcão passando a variaveis no parametro e tipando as variaveis.
function pessoa3(codigo: number, nome: string): string{
    return `Codigo = ${codigo} \n  Nome = ${nome}`;
}
//Colocando os valor no paramentro da função selecionada
console.log(pessoa3(10,'John'));

//Modo 4 Também em variaveis constante.
const passoa4: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Jonh'
}

//Modo 5
//Criar uma interface e instaciando e criando um objeto instaanciando pela interface.
interface Pessoa6 {
    codigo: number,
    nome: string
}

const funcionario = {} as Pessoa6;
funcionario.codigo = 10;
funcionario.nome = 'Jonh';


//Modo 6 - Ainda unsando a interface acima.
const funcionario2: Pessoa6 = {
    codigo: 10,
    nome: 'Jonh'
}


