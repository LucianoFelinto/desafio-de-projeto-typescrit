// Como podemos melhorar o esse código usando TS? 

//Podemos adicionar um conjutos de valores constantes pré-definido
enum Cargos{
    Atriz,
    Padeiro
}

//Criando um objeto com os tipos das variaveis.
type Humano = {
    nome: string,
    idade: number,
    profissao: Cargos
}



let pessoa1 : Humano = {
    nome: "maria",
    idade: 29,
    profissao: Cargos.Atriz
}
    

let pessoa2 : Humano = {
    nome: "roberto",
    idade: 19,
    profissao:  Cargos.Padeiro
}


let pessoa3 : Humano = {
    nome: "laura",
    idade: 32,
    profissao: Cargos.Atriz
}

let pessoa4 : Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Cargos.Padeiro
}