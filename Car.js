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

module.exports = Car;