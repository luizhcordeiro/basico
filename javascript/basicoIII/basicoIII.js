alert("bem vindo! A seguir pediremos que informe alguns dados.");

let olderPersonName = prompt("Digite o nome da pessoa mais velha:"); 
let olderPersonAge = prompt("Informe a idade da pessoa mais velha:");

let youngerPersonName = prompt("Digite o nome da pessoa mais nova:");
let youngerPersonAge = prompt("Informe a idade da pessoa mais nova:");

let ageDifference = olderPersonAge - youngerPersonAge ;

alert(
	"pessoa mais velha: " + olderPersonName + "\n" +
	"idade: " + olderPersonAge + "\n ------ \n" + 
	"pessoa mais nova: " + youngerPersonName + "\n" +
	"idade: " + youngerPersonAge + "\n ------ \n" + 
	"diferença de Idade: " + ageDifference + "."
);