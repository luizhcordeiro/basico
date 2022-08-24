comparação:
&& // E
|| // ou 

Console:
console.log("")
console.info("")
console.warn("")
console.error("")

tela:
alert("") // mensagem na tela 
prompt("") // pergunta na tela 
confirm("") // true ou false

condições:
while(expressão){
	<bloco de código executado>
}

for (var i = 0; i < Things.length; i++) {
	Things[i]
}

funcão:
 function nome(){expressão}
 let nome = function(){expressão}
 let nome = (x) => {expressão}
 let nome = x => expressão 

arrays:
.push() // add um item no final
.unshift() // add item no começo
.pop() // remove o ultimo
.shift() // remove o primeiro

.length() // num. elementos da array
.indexOf() // indice elemento buscado

.splice(indice, Nremove, adds) // adicionar ou remover no meio
.slice(indice, Nelemntos) // nova array da seleção

Math:
.abs() // valor absoluto
.pow(x,x) // elevado a
.max() // maior valor entre 2 numeros
.min() // menor valor entre 2 numeros
.random() //alatorio entre 0 e 1


parseInt() // transforma em inteiro

document:
.getElementsByTagName('') // tags
.getElementById('') //ids

//fizzBuzz
const fizzBuzz = num => { 
	for(i=1 ; 1<=num; i++){

		if(i % 3 === 0 && 1 % 5 === 0){
			console.log("fizzBuzz")
		}else if (i % 3 === 0) {
			console.log("fizz")
		}else if (i % 5 === 0) {
			console.log("buzz")
		}else{
			console.log(i)
		}
	}
}

//palindromo
const palindrome = str => {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('')
}

//Anagrama
const buildCharObject = str =>{
  const charObj = 
  for(let char of str.replace(/[^w]/g).toLowerCase()) 
    
  charObj[char] = charObj[char] + 1 
  return charObj
}

const anagram = (strA, strB) => {
  
  const aCharObject = buildCharObject(strA)
  
  const bCharObject = buildCharObject(strB)

  
  
  if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) 
    return false
  
  for(let char in aCharObject) 
    if(aCharObject[char] !== bCharObject[char]) 
      return false
    
 	return true
}

//vogais
const findVowels = str => 
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) 
    if(vowels.includes(char)) 
      count++
    
  
  return count
