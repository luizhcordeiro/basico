let distanceInLy = prompt("Digite a distância em anos luz")

let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade astronômica (AU)\n3. Quilômetros (KM) \n\n (Digite o número da opção desejada)")

let choseUnity ;
let convertedDistance

switch(chosenOption){
	case "1":
	choseUnity = "Parsec"
	convertedDistance = distanceInLy * 0.306601
	break;
	case "2":
	choseUnity = "Unidade astronômica"
	convertedDistance = distanceInLy * 63241.1
	break;
	case "3":
	choseUnity = "Quilômetros"
	convertedDistance = distanceInLy * 9.5 * Math.pow(10,12)
	break;
	default:
	choseUnity = "unidade não identificada"
	convertedDistance = "conversão fora do escopo"
	break;
}

alert("distância em Anos-luz: " + distanceInLy + "\n" + choseUnity + ": " + convertedDistance )