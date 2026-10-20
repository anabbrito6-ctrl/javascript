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
let numero1 = 8
let numero2 = 8

if(numero1 > numero2){
    console.log("numero1 maior que numero2")
}else if(numero1 < numero2){
    console.log("numero1 menor que numero2 ")
}else {
    console.log("empate")
}


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

let classificacao =4
if(classificacao >9){ 
    console.log("excelente!")
}else if (classificacao >7){
    console.log("bom")
}else if ( classificacao <5){
    console.log("insuficiente")
}else (classificacao >5)
    console.log("regular")



//atividade6

let semana = 3
if(semana  ==1){
    console.log("domingo")
}else if  (semana ==2){
    console.log("segunda-feira")
}else if (semana ==3){
    console.log("terça-feira")
}else if (semana ==4){
    console.log("quarta-feira")
}else if (semana ==5){
    console.log("quinta-ferira")
}else if (semana ==6){
    console.log("sexta-feira")
}else{
    console.log("sabado")
}




let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

if(idadeDirigir >=18 && temCNH == true && temCarro == true){
    console.log("você pode dirigir!")
}else{
    console.log("você não pode dirigir")
}


let ehprofessor = false
let ehaluno = false

if(ehprofessor == true || ehaluno == true){
    console.log("você não tem direito a meia-entrada!")
}else{ console.log("você não tem direito a meia-entrada")
}

//&& = e
//|| = ou

// Número dentro do intervalo
let intervalo = 52;

if(intervalo > 10 && intervalo < 50){ 
    console.log("dentro do intervalo")
}else{
    console.log("fora do intervalo")
}

//Elegibilidade para estágio
let estagio = 17

if( estagio>15 && estagio <25 ){
    console.log("sua idade atende ao requisito")
}else{
    console.log("sua idade não atende ao requisito")
}


//Frete grátis
let valorCompra = 152;
let ehassinante = true;

if(valorCompra >= 200 || ehassinante == true){
    console.log("você tem direito a frete grátis")
}else{
    console.log("você não tem direito a frete grátis")
}

//Dia de descanso
let diasemana =2
 if(diasemana ==2){
    console.log("segunda-feira, dia útil")
 } else if (diasemana ==3){
    console.log("terça-feira, dia útil ")
 } else if(diasemana ==4){
    console.log("quarta-feira,dia útil")
 }else if (diasemana ==5){
    console.log("quinta-feira, dia útil")
 }

// Promoção especial