//Задание 1

function parseCount (value) {
    let parseValue = Number.parseFloat(value);
    if (Number.isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    }
    return parseValue;
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
} 

//Задание 2

class Triangle {
    constructor(lengthA, lengthB, lengthC) {
        if (lengthA + lengthB <= lengthC || lengthA + lengthC <= lengthB || lengthB + lengthC <= lengthA) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }

        this.lengthA = lengthA;
        this.lengthB = lengthB;
        this.lengthC = lengthC;
    }

    get perimeter() {
        return this.lengthA + this.lengthB + this.lengthC;
    }

    get area() {
        let semiperimeter = this.perimeter / 2;
        let areaValue = Math.sqrt(semiperimeter * (semiperimeter - this.lengthA) * (semiperimeter - this.lengthB) * (semiperimeter - this.lengthC));
        return parseFloat(areaValue.toFixed(3));
    }
}

function getTriangle (lengthA, lengthB, lengthC) {
    try {
        return new Triangle(lengthA, lengthB, lengthC);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}