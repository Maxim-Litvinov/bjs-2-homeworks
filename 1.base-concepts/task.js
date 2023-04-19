"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c
	if (d == 0) {
		let res = -b / (2 * a)
		arr.push(res)
	}
	else if (d > 0) {
		let res1 = (-b + Math.sqrt(d)) / (2 * a)
		arr.push(res1)
		let res2 = (-b - Math.sqrt(d)) / (2 * a)
		arr.push(res2)
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100
	let creditBody = amount - contribution
	let p = percent / 12
	let amountMounths = creditBody * (p + (p / ((Math.pow((1 + p), countMonths) - 1))))
	let summ = amountMounths * countMonths
	return Number(summ.toFixed(2))
}

