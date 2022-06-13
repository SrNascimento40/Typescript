//boolean

const verdaFalso: boolean = false;

//number

const numero = 12390823
const quebradoTambem = 57.32

//string

const string = "Palavra"

//array

const Arrey: number[] = [1, 32, 54];

//tuple
let jogadores: [string, number, string, string];
jogadores = ["Pelé", 68, "Zidane", "Roberto Carlos"];

//enum
enum statusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    reprovado = "003"
}

const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;

//any

const retornoDaAPI: any[] = [123, "Shitzu", true, 715];

//void - função que não retorna nada

function  printar(nana:string): void {
    console.log(nana);
}

//null e undefined

const u: undefined = undefined;
const n: null = null;

//object

function criar(objeto:object) {
    
}
// criar("vitor") -> dá erro pois não é objeto
criar({
    tetris:42,
})

//never

function loopinfinito(): never {
    while (true) {
        
    }
}


//UNION TYPES

function avaliar(nota:number | string) {
    console.log("Sua nota é " + nota);
}

avaliar("7");
avaliar(7);

//alias

const funcionarios: Array<string> = ["beltrano", "fulano", "Cicrano"];

type funcas = Array<string>;
const funcionarios01: funcas = ["beltrano", "fulano", "Cicrano"];
type funcias = {
    Nome: string;
    sobrenome:string;
    idade:number;
    eficiente:boolean;
}

type testeSom = {
    testeTestes: string; 
    soooom?: boolean;
    // o tal ?: permite que a resposta seja o que você pediu ou undefined
}

//assertion

const minhaAltura: any = 1.86;
(minhaAltura as number).toString();
//as number garante que é um numero para permitir tratar como numero

