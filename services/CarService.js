class CarService {

    constructor (name, country) {
        this.name = name;
        this.country = country;
        this.cars = new Array();
    }
    
    addCar(car) {
        this.cars.push(car);
    }

    displayService() { console.log(this.cars);}
}

module.exports = CarService;