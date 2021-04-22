// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz';
let idade: number = 56;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeLetras: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Luiz',
    idade: 30,
};

// Funções
function soma(x: number, y: number) {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
