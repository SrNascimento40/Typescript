"use strict";
class Data {
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const data = new Data(1, 1, 2007);
console.log(data.dia);
//console.log(data.mes); por estar privado não é acessível
const data2 = new Data(1, 5);
//se não coloca nada ele põe valor default
console.log(data);
class Carro {
    constructor(marca, modelo, velocidadeMax = 220) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
    }
    alterarVelo(delta) {
        this.velocidadeAtual += delta;
    }
    acelerar() {
        this.alterarVelo(5);
    }
    frear() {
        this.alterarVelo(-5);
    }
}
const carro = new Carro("Chevrolet", "Opala", 250);
