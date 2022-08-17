const fs = require('fs')

const coloursFile = fs.readFileSync('./colours.txt').toString().split('\r\n')
const numbersFile = fs.readFileSync('./numbers.txt').toString().split('\r\n')

function MostFrequentChar(s) {
    return s.split('').reduce((acc,char)=>{
        let len = s.split(char).length - 1;
        return len > acc[1] ? [char,len] : acc
    },['',0])[0]
}


const sortedNumbers = numbersFile.sort((a, b) => a - b)


// Numbers 1. Which digit appears most in the file?
console.log('[Numbers 1] The most frequent number is', MostFrequentChar(sortedNumbers.toString().replaceAll(',', '')))


// Numbers 2. Which number is missing?
for (let i = 0; i < sortedNumbers.length; i++) {
	// console.log(sortedNumbers[i], i + 1)
	if (sortedNumbers[i] != i + 1) {
		console.log('[Numbers 2] We are missing the number ' + (i + 1) + '\n')
		break
	}
}


// Colours 1. Which colour appears most in the file?
var greenArray = []
var redArray = []
var blueArray = []

coloursFile.toString().split(',').forEach(colour => {
	if (colour == 'GREEN') {
		greenArray.push(colour)
	} else if (colour == 'RED') {
		redArray.push(colour)
	} else if (colour == 'BLUE') {
		blueArray.push(colour)
	}
})

console.log(`[Colours 1] Red: ${redArray.length} Green: ${greenArray.length} Blue: ${blueArray.length}`)



// Colours 2-3. Which colour appears in the fewest number of lines?
var greenArray2 = []
var redArray2 = []
var blueArray2 = []

var greenNotBlue = []

coloursFile.forEach(colours => {
	if (colours.includes('GREEN')) {
		greenArray2.push(colours)
		if (!colours.includes('BLUE')) {
			greenNotBlue.push(colours)
		}
	}
	if (colours.includes('RED')) {
		redArray2.push(colours)
	}
	if (colours.includes('BLUE')) {
		blueArray2.push(colours)
	}
})

console.log(`[Colours 2] Red: ${redArray2.length} Green: ${greenArray2.length} Blue: ${blueArray2.length}`)
console.log('[Colours 3]', greenNotBlue.length, ' lines contain green but not blue')


// Colours 4. How many lines have the same colour repeated three times?
var counter = 0
var counter2 = 0

coloursFile.forEach(colours => {
	var cArray = colours.split(',')
	if (cArray[0] == cArray[1] && cArray[1] == cArray[2]) {
		// console.log(cArray)
		counter++
	}

	if (cArray[0] != cArray[1] && cArray[1] != cArray[2] && cArray[0] != cArray[2]) {
		// console.log(cArray)
		counter2++
	}

})
console.log('[Colours 4]', counter)
console.log('[Colours 5]', counter2)