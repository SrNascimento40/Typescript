class Data{
    public dia: number;
    private mes: number;
    ano: number;

    constructor(dia:number, mes: number, ano: number = 1970) {
        this.dia=dia;
        this.mes=mes;
        this.ano=ano;
    }
}

const data = new Data(1, 1, 2007)
console.log(data.dia);
//console.log(data.mes); por estar privado não é acessível

const data2 = new Data(1, 5)
//se não coloca nada ele põe valor default
console.log(data);


class Carro{
    private velocidadeAtual: number = 0

    constructor(
        public marca:string,
        public modelo:string,
        private velocidadeMax: number = 220,
    ) {}

    private alterarVelo(delta:number){
        this.velocidadeAtual += delta
    }
    
    acelerar(){
        this.alterarVelo(5);
    }

    frear(){
        this.alterarVelo(-5);
    }

}

const carro = new Carro("Chevrolet", "Opala", 250)


class Camaro extends Carro {
    private turbo = false;

    constructor() {
        super("Chevrolet", "Camaro", 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.ligarTurbo();

