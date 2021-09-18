const prompt = require('prompt-sync')({sigint: true});
 
const valueText = prompt('Enter a fractional value (e.x., 3/5): ');
const numerator = Number(valueText.split('')[0]);
const denominator = Number(valueText.split('')[2]);
console.log(`In a table, you will reach a whole number in ${denominator} values, and the number opposite of that will be ${numerator}. Here is an example:`)
console.log('     x     |     y    ')
console.log('----------------------')
for (let num = 1; num <= denominator*2; num++) {
	console.log(`     ${num}     |    ${num * numerator}/${num * denominator} = ${(num * (numerator/denominator)).toFixed(2)}  `)
}