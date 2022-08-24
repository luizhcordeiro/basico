let depertureDateEntry = prompt("Digite a data de nascimento (formato: DD/MM/YYYY)")

let depertureDate = moment(depertureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDift = today - depertureDate 

let chosenOption = prompt("Qual formato você gostaria de saber quanto tempo viveu:\n1 - Segundos\n2 - Minutos\n3- Horas\n4 - Dias\n(digite o número correspondente)")

if(chosenOption == 1){
	let secondsOfDepurate = Math.round(dateDift / 1000)
	alert("Você viveu: " + secondsOfDepurate + " Segundos")
}else if(chosenOption == 2){
	let minutesOfDepurate = Math.round(dateDift / 1000 / 60)
	alert("Você viveu: " + minutesOfDepurate + " Minutos")
}else if(chosenOption == 3){
	let hoursOfDepurate = Math.round(dateDift / 1000/ 3600)
	alert("Você viveu: " + hoursOfDepurate + " Horas")
}else if(chosenOption == 4){
	let daysOfDepurate = Math.round(dateDift / 1000/ 3600/ 24)
	alert("Você viveu: " + daysOfDepurate + " dias")
}else{
	alert("opção invalida")
}