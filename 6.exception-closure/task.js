
function parseCount(n) {
	let parseResult = Number.parseFloat(n);
	if (Number.isNaN(parseResult)) throw new Error("Невалидное значение");
	return parseResult;
}

function validateCount(a) {
	try {
		return parseCount(a)
	} catch (err) {
		return err
	}
}


class Triangle {
	constructor(a, b, c) {
		this.a = a
		this.b = b
		this.c = c

		if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}

	get perimeter() {
		let p = (this.a + this.b + this.c);
		return p;
	}

	get area() {
		let p = 0.5 * (this.a + this.b + this.c)
		let s = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5
		return (+s.toFixed(3))
	}
}

function getTriangle(a, b, c) {
	try {
		let trg = new Triangle(a, b, c);
		return trg;
	}
	catch (error) {
		let err = {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
		return err;
	}
}

