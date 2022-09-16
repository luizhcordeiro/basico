let spaceship = prompt("Digite o nome da nave")

let spaceshipVelocity = 0 

let choseOption

function showMenu() {
	let option
	while(option != "1" && option != "2" && option != "3" && option != "4" ){ 
		option = prompt(" o que deseja fazer?\n" + 
			"1- Acelerar a nave em 5km/s\n" + 
			"2- Desacelerar a nave em 5km/s\n" +
			"3- Imprimir dados de bordo\n" +
			"4 - Sair do programa\n\n" +
			"(Digite apenas o número da opção desejada)" 
			)
	}

	return option
}

function speedUp(velocity){
	let newVelocity = velocity + 5
	return newVelocity
}

function slowDown(velocity){
	let newVelocity = velocity - 5
	if(newVelocity < 0){
		newVelocity = 0
	}
	return newVelocity
}

function printSpaceshipBoardData(name, velocity){
	alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do {
	choseOption = showMenu()
	switch(choseOption) {
		case "1":
		spaceshipVelocity = speedUp(spaceshipVelocity)
		break
		case "2":
		spaceshipVelocity = slowDown(spaceshipVelocity)
		break
		case "3":
		printSpaceshipBoardData(spaceship, spaceshipVelocity)
		break
		default:
		alert("Encerrando programa de bordo")
	}
}while(choseOption != "4")