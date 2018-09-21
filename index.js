
class Car {

    constructor(brand, model, year) {
        this.brand = brand || "Jeep";
        this.model = model || "CJ5";
        this.year = year || 1979;
    }

    DisplayCarInfo() {
        console.log(this.brand + ", " + this.model + ", " + this.year);

    }
}

const car1 = new Car("Ford", "Escort", 2012);
const car2 = new Car("GM", "Camero", 2015);
const car3 = new Car();


car1.DisplayCarInfo();
car3.DisplayCarInfo();