function getArrayParams(...arr) {
	let min = arr[0]
	let max = arr[0]
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
		if (arr[i] > max) {
			max = arr[i]
		}
		sum += arr[i]
	}
	let avg = Number((sum / arr.length).toFixed(2))
	return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
	if (arr.length == 0) {
		return 0
	}
	const sum = arr.reduce(function (currentSum, currentNumber) {
		return currentSum + currentNumber
	}, 0)
	return sum
}

function differenceMaxMinWorker(...arr) {
	if (arr.length == 0) {
		return 0
	}
	let max = Math.max(...arr)
	let min = Math.min(...arr)
	return max - min
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElemen = 0
	let sumOddElement = 0
	if (arr.length == 0) {
		return 0
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElemen += arr[i]
		}
		else {
			sumOddElement += arr[i]
		}
	}
	return sumEvenElemen - sumOddElement
}

function averageEvenElementsWorker(...arr) {
	if (arr.length == 0) {
		return 0
	}
	let sumEvenElement = 0
	let countEvenElement = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i]
			countEvenElement++
		}
	}
	return sumEvenElement / countEvenElement
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity
	for (let i = 0; i < arrOfArr.length; i++) {
		let res = func(...arrOfArr[i])
		if (res > maxWorkerResult) {
			maxWorkerResult = res
		}
	}
	return maxWorkerResult
}

