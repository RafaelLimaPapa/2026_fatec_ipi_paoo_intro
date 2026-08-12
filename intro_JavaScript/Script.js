//objetos Javascript
//objetos JSON (JavaScript Object Notation)
//Uma calculadora realiza as operações de soma e subtração
const calculadora = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    dividir: (a,b) => a/b,
    multiplicar: (a,b) => a*b
},



/*

//Uma concessionária que tem CNPJ e endereço. Endereço tem rua, bairro e 
//numero. A concessionária tem uma coleção de veiculos. Cada Veiculo
//tem marca, modelo e ano de fabricação


let concessionaria = {
    CNPJ: 123456789,
    endereco: {
        rua: 'a',
        bairro: 'a',
        numero: 209
    },
    //uso de colchetes permite a instanciação de diversos modelos
    veiculo: [
        {marca: 'Volkswagen',
        modelo: 'Polo',
        anoDeFabricacao: 2011}
        {marca: 'Ford',
        modelo: 'Ka',
        anoDeFabricacao: 2006
        }
    ]
}
console.log(concessionaria)

//Uma pessoa que se chama Maria, tem 21 anos e mora na rua B, numero 20
let pessoa = {
    nome: "Maria",
    idade: 21,
    endereco: {
        rua: 'B',
        numero: 20
    }
}
console.log(pessoa)


//Uma pessoa e se chama João e tem 17 anos
let pessoa = {
    nome: "João",
    idade: 17
}
//nome é uma chave e o joão é o valor







function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont++)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    return (f1, f2)
}
let res = eAgora()
res.f1()
res.f2()

//closure

function saudacoesFactory(saudacao, nome){
    return function(){
        return saudacao + ", " + nome
    }
}

const olaJoao = saudacoesFactory("Olá", "João")
const tchauJoao = saudacoesFactory("Tchau", "João")
console.log(olaJoao())
console.log(tchauJoao())

function ola(){
    let nome = 'João'
    return function(){
        console.log('Olá, ' + nome)
    }
}
let olaResult = ola()
olaResult()

function f(){
    let nome = 'João'
    function g(){
        console.log(nome)
    }
    g()
}
f()
//
let umaFuncao = function(){
    console.log("Fui armazenada em uma variavel")
}
umaFuncao()
function f(funcao){
    funcao()
}

function g(){
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao
}
f(function(){
    console.log("Estou sendo passada para f")
})

const gResult = g()
gResult()
g()() //primeiro chama a função g e depois chama a ouraFuncao
// g()()()
f(g())
//arrow function 
const hello = () => {console.log('Oi')}
hello()
const dobro = (n) => 2 * n
console.log(dobro(2))
const ehPar = n => n % 2 === 0
console.log(ehPar(7))
const echo = n => n
console.log(echo(5))

const dobro = function (n){
    return 2 * n
}
console.log(dobro(2))
const triplo = function (n){
    return 3 * n
}
console.log(triplo(10))
//Funções
//funcões regulares e arrow functions


function soma(a,b){
    return a+b
}
const res = soma(2,3)
console.log(res)

function hello(){
    console.log('oi')
}
hello()
function hello(nome){
    console.log('oi, ' + nome)
}
hello('Ana')
//vetores (bem parecidos com o arraylist do java)
const nomes = ["Ana Maria", "Antonio", "Alex", "Cristina"]
//Filter
const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
console.log(apenasComA)
//map
const iniciais = nomes.map((n) => {return n.charAt(0)})
console.log(iniciais)
//reduce
const valores = [1, 2, 3 ,4]
const soma = valores.reduce((ac, V) => {return ac + V})
console.log(soma)
//every
const todosComecamComA = nomes.every((n) => {return n.startsWith("A")})
console.log(todosComecamComA)

v1 = []
v1[0] = 3.4
v1[10] = 2 
v1[2] = "abc"
v1[102] = 1 
console.log(v1.length)

v2 = [2, "abc", true]
console.log(v2)
for(let i = 0; i< v2.length; i++){
    console.log(v2[i])
}


//Comparação
//== Faz coerção (Mal uso)
//=== Não faz coerção 
console.log(1 == 1)             //true
console.log(1 == '1')           //true
console.log(1 === 1)            //true
console.log(1 === '1')          //false
console.log(true == 1)          //true
console.log(1 == [1])           //true
console.log(null == null)       //true
console.log(null == undefined)  //true
console.log([] == false)        //true
console.log([] == [])           //false

//Coerção
const n1 = 2
const n2 = '3'
//Coerção implicita
const n3 = n1 + n2
console.log(n3)
//Coerção explicita
const n4 = n1 + Number(n2)
console.log(n4)

hoist: içamento 

var idade = 18
console.log("Oi, " + nome)
if(idade >= 18){
    var nome = "João"
    console.log("Parabens, " + nome + ". Você pode dirigir")
}
console.log("Até mais, " + nome)

let linguagem = "Javascript"
console.log("Aprendendo " + linguagem)
let linguagem = "Java"
console.log("Aprendendo " + linguagem)

var nome = "José"
console.log(nome)
nome = "João"
console.log(nome)

let nome = "Ana"
console.log(nome)
nome = "Ana Maria"
console.log(nome)

começando...
const, let, var
a = 2
console.log(typeof(a))
a = "abc"
console. log(typeof(a))
a.falar()


int a = 2;
a = "abc";
a.falar();
*/