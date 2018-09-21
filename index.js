
class Car {

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    DisplayCarInfo() {
        console.log(this.brand + ", " + this.model + ", " + this.year);

    }
}

const car1 = new Car("Ford", "Escort", 2012);
const car2 = new Car("GM", "Camero", 2015);


car1.DisplayCarInfo();