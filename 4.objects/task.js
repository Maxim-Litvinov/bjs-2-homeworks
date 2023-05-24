function Student(name, gender, age) {
	this.name = name
	this.gender = gender
	this.age = age
	this.marks = []
}


Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
	if (this.hasOwnProperty('marks') == true) {
		this.marks.push(...marks)
	}
}

Student.prototype.getAverage = function () {
	if (this.hasOwnProperty('marks') == false || this.marks.length == 0) {
		return 0
	} else {
		const average = this.marks.reduce((average, el) => average + el, 0)
		return (average / this.marks.length)
	}

}

Student.prototype.exclude = function (reason) {
	this.excluded = reason
	delete this.subject
	delete this.marks
}

