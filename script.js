//console.log() mostra uma informação no console
console.log("Olá, mundo!");//string

console.log(typeof "stars");//string
console.log(typeof 1.8);//number
console.log(typeof true);//boolean

// váriavel
// const não pode ter seu valor alterado durante o programa
const nome = "ana"
console.log(nome);

//let pode ter seu valor alterado durante o programa
let idade = 18;
console.log(idade)

console.log("Olá " + nome + ", que tem " + idade + " anos");
idade = 19;
console.log(idade)

console.log(`Olá ${nome}, que tem ${idade} anos.`)

//exercício
let nome1 = "karolliny";
console.log(nome1);

nome2 = " karol";
console.log(`Olá ${nome1}, com o apelido ${nome2}`)

let kg = "61";
console.log(kg);
console.log(`Olá ${nome1}, que pesa ${kg}`)

kg = "65"
console.log(`Olá ${nome1}, que pesa ${kg}`)

// métodos de string
const texto = "TomorroW"

//conta quantos caracteres a string tem
console.log(texto.length)

//conta as letras em maíusculo
console.log(texto.toUpperCase())

//conta as letras em minúsculo
console.log(texto.toLowerCase())

const nome_completo = "Ana Beatriz Santos De Brito"

console.log(nome_completo.includes("Beatriz"))//true

console.log(10 > 5)//true
console.log(10 < 5)//false
console.log(10 >= 10)//true
console.log(10 <= 5)//false
console.log("10" == 10)//true
console.log("10" === 10)// false  palavra e número
console.log(10 !== 5)//true

const idadepessoa = 18

console.log(idadepessoa >= 19)//true
console.log(idadepessoa >= 16)//false

//exercício2 
const nome_completo2 = "JIN"
console.log(nome_completo2 == ("JIN"))//true
console.log(nome_completo2 == ("jin"))//false

// coletamos a idade da pessoa
let pessoaidade = 16;
//verificar se a idade é maior ou igual a 18
if (pessoaidade >= 18) {
    //se maior ou igual a 18 então ela é maior de idade
    console.log(" Já pode ser preso hahahaha!")
} else {
    // se menor de 18  então ela é menor de idade
    console.log("não vai pra balada!😂😂😂🫵")
}


//coletamos a idade da pessoa
let idadevotacao = 20
//verificar se a idade da pessoa é maior que 70
if (idadevotacao > 70) {
    console.log("você não é obrigado a votar!")
} else if (idadevotacao >= 18) {
    //senão se a idade da pessoa for maior ou igual a 18
    console.log("você tem que votar obrigatoriamente!")
} else if (idadevotacao >= 16) {
    //senão se a idade da pessoa for maior ou igual a 16
    console.log("você não é obrigado a votar, mas caso queira pode!")
} else {
    //senão for nenhuma das alternativas anteriores
    console.log("você NÃO pode votar!")
}

//atividade1
let notaescola = 8;
if (notaescola >= 7) {
    console.log("aprovado!")
} else {
    console.log("reprovado!")
}

//atividade2
let numero1 = 7
let numero2 = 8

if(numero1 > numero2){
    console.log(numero1 maior que numero2)
}else if(numero1)


//atividade3
let senha = "senai123"
if(senha === "senai123"){
    console.log(senha = "acesso autorizado")
}else {   
    console.log("senha incorreta")
}

//atividade4
let temperatura = 19
if(temperatura <18) {
    console.log("frio")
} else if(temperatura >=27) {
    console.log("quente")
} else if(temperatura ){
    console.log("agradável")
}

//atividade5















