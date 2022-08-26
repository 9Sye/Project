const fs = require('fs')

// Read both of the text files and split each line into an array
const coloursFile = fs.readFileSync('./colours.txt').toString().split('\r\n')
const numbersFile = fs.readFileSync('./numbers.txt').toString().split('\r\n')

// You input a string and it returns the most frequent character
function MostFrequentChar(s) {
    return s.split('').reduce((acc,char)=>{
        let len = s.split(char).length - 1;
        return len > acc[1] ? [char,len] : acc
    },['',0])[0]
}

// Sort numbers ascending (1,2,3 ... 1562)
const sortedNumbers = numbersFile.sort((a, b) => a - b)


// Numbers 1. Which digit appears most in the file?

// remove the comma's first, then get the most frequent number
console.log('[Numbers 1] The most frequent number is', MostFrequentChar(sortedNumbers.toString().replaceAll(',', '')))


// Numbers 2. Which number is missing?

// Loop over the length of the array
for (let i = 0; i < sortedNumbers.length; i++) {
	// Check if sortedNumbers index does not line up with the loop +1 because it starts at 0 
	if (sortedNumbers[i] != i + 1) {
		console.log('[Numbers 2] We are missing the number ' + (i + 1) + '\n')

		// Break because we want to stop at the number its missing
		break
	}
}


// Colours 1. Which colour appears most in the file?
//var greenArray = []
//var redArray = []
//var blueArray = []

var greenColour = 0;
var redColour = 0;
var blueColour = 0;

// Loop over each line in the color file and split on the comma after
// So it gets converted to a array like this ["GREEN", "RED", "BLUE", "RED", "RED", ...]
coloursFile.toString().split(',').forEach(colour => {

	// If the color matches with the check then increment the number
	if (colour == 'GREEN') {
		//greenArray.push(colour)
		greenColour++
	} else if (colour == 'RED') {
		//redArray.push(colour)
		redColour++
	} else if (colour == 'BLUE') {
		//blueArray.push(colour)
		blueColour++
	}
})

// console.log(`[Colours 1] Red: ${redArray.length} Green: ${greenArray.length} Blue: ${blueArray.length}`)
console.log(`[Colours 1] Red: ${redColour} Green: ${greenColour} Blue: ${blueColour}`)



// Colours 2-3. Which colour appears in the fewest number of lines?

var greenColour2 = 0;
var redColour2 = 0;
var blueColour2 = 0;
var greenNotBlueColour = 0;

// var greenArray2 = []
// var redArray2 = []
// var blueArray2 = []

// var greenNotBlue = []

// Loop over each line in the color file
coloursFile.forEach(colours => {
	if (colours.includes('GREEN')) {
		// greenArray2.push(colours)
		greenColour2++
		if (!colours.includes('BLUE')) {
			// greenNotBlue.push(colours)
			greenNotBlueColour++
		}
	}
	if (colours.includes('RED')) {
		// redArray2.push(colours)
		redColour2++
	}
	if (colours.includes('BLUE')) {
		// blueArray2.push(colours)
		blueColour2++
	}
})

// console.log(`[Colours 2] Red: ${redArray2.length} Green: ${greenArray2.length} Blue: ${blueArray2.length}`)
// console.log('[Colours 3]', greenNotBlue.length, 'lines contain green but not blue')

console.log(`[Colours 2] Red: ${redColour2} Green: ${greenColour2} Blue: ${blueColour2}`)
console.log('[Colours 3]', greenNotBlueColour, 'lines contain green but not blue')

// Colours 4. How many lines have the same colour repeated three times?
var counter = 0
var counter2 = 0

// Loop over each line in the color file
coloursFile.forEach(colours => {

	// Split each line of colors (BLUE,GREEN,RED) on the comma so it converts to an array ["BLUE", "GREEN", "BLUE"]
	var cArray = colours.split(',')

	// Check if all the array values match with eachother so we know they are the same
	if (cArray[0] == cArray[1] && cArray[1] == cArray[2]) {
		counter++
	}

	// Check if all the array values don't match with eachother
	if (cArray[0] != cArray[1] && cArray[1] != cArray[2] && cArray[0] != cArray[2]) {
		counter2++
	}

})
console.log('[Colours 4]', counter)
console.log('[Colours 5]', counter2)
