function add (x,y) {
	return x+y
}

function subtract (x,y) {
	return x - y
}

function sum (array) {
	let l = array.length;
	let total = 0
	if(array.length == 0) {
		return 0
	}else {
		for(let i = 0; i<l;i++) {
			total += array[i]
		}
		return total;
	}
}

function multiply (array) {
	let l = array.length;
	let total
	if(l >= 2) {
		total = 1;
	}else {
		console.log("ERROR");
	}
	for(let i =0; i<l; i++) {
		total *= array[i]
	}
	return total;
}

function power(x,y) {
	return x ** y;
}

function factorial(x) {
	let total = 1
	for(let i = 1; i <= x; i++) {
		total *= i
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}