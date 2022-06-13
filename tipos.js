"use strict";
//boolean
const verdaFalso = false;
//number
const numero = 12390823;
const quebradoTambem = 57.32;
//string
const string = "Palavra";
//array
const Arrey = [1, 32, 54];
//tuple
let jogadores;
jogadores = ["Pelé", 68, "Zidane", "Roberto Carlos"];
//enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["reprovado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
const statusDaAprovacao = statusAprovacao.Aprovado;
//any
const retornoDaAPI = [123, "Shitzu", true, 715];
//void - função que não retorna nada
function printar(nana) {
    console.log(nana);
}
//null e undefined
const u = undefined;
const n = null;
//object
function criar(objeto) {
}
// criar("vitor") -> dá erro pois não é objeto
criar({
    tetris: 42,
});
//never
function loopinfinito() {
    while (true) {
    }
}
//UNION TYPES
function avaliar(nota) {
    console.log("Sua nota é " + nota);
}
avaliar("7");
avaliar(7);
//alias
const funcionarios = ["beltrano", "fulano", "Cicrano"];
const funcionarios01 = ["beltrano", "fulano", "Cicrano"];
//assertion
const minhaAltura = 1.86;
minhaAltura.toString();
//as number garante que é um numero para permitir tratar como numero
