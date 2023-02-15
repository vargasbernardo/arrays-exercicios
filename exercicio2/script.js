const apenasNumeros = [10, 27, 35, 97, 2002, 987, 4]
const apenasStrings = ["Chocolate", "Biscoito", "Caramelo", "Twix"]
const numerosStringsBooleanos = ["Kami", 28, true]

console.log(apenasNumeros, apenasStrings, numerosStringsBooleanos)

// Imprima a quantidade de itens de cada array
console.log(apenasNumeros.length)
console.log(apenasStrings.length)
console.log(numerosStringsBooleanos.length)

// imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array.
console.log(apenasNumeros[0])
console.log(apenasStrings[1])
console.log(numerosStringsBooleanos[2])

// b)
const temDezPrimeiroArray = apenasNumeros.includes(10)
const temDezTerceiroArray = numerosStringsBooleanos.includes(10)

console.log(temDezPrimeiroArray)
console.log(temDezTerceiroArray)