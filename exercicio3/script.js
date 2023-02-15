const apenasNumeros = [10, 27, 35, 97, 2002, 987, 4]
const apenasStrings = ["Chocolate", "Biscoito", "Caramelo", "Twix"]
const numerosStringsBooleanos = ["Kami", 28, true]

const apenasNumerosCopia = apenasNumeros.slice()
const apenasStringsCopia = apenasStrings.slice()
const numerosStringsBooleanosCopia = numerosStringsBooleanos.slice()

// a) 
apenasNumerosCopia.unshift(44)
console.log('Original', apenasNumeros)
console.log('Copia', apenasNumerosCopia)

// b) 
apenasStringsCopia.pop()
console.log('Original',apenasStrings)
console.log('Copia', apenasStringsCopia)

// c)
numerosStringsBooleanosCopia.splice(1, 1)
console.log('Original', numerosStringsBooleanos)
console.log('Copia', numerosStringsBooleanosCopia)