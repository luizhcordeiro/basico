
let pilotName = prompt("Qual seu nome, piloto?");

let velocity = 0 

let newVelocity = prompt("A que velocidade você gostaria de acelerar " + pilotName + " ?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + " km/s")

if (confirmVelocity) {
	velocity = newVelocity
}

if (velocity <= 0) {
	alert(pilotName + " a nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
	alert(pilotName + " você está devagar. Podemos aumentar mais")
} else if (velocity < 80) {
	alert(pilotName + " essa parece uma boa velocidade, vamos manter")
} else if (velocity < 100) {
	alert(pilotName + " você está rápido de mais, considere desacelerar")
} else {
	alert("Velocidade perigosa " + pilotName + ". Estou assumindo o controle da nave")
}