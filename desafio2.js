"use strict";
// Como podemos melhorar o esse código usando TS? 
//Podemos adicionar um conjutos de valores constantes pré-definido
var Cargos;
(function (Cargos) {
    Cargos[Cargos["Atriz"] = 0] = "Atriz";
    Cargos[Cargos["Padeiro"] = 1] = "Padeiro";
})(Cargos || (Cargos = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Cargos.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Cargos.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Cargos.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Cargos.Padeiro
};
