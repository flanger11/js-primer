class CarService {

    constructor (name, country) {
        this.name = name;
        this.country = country;
        this.cars = new Array();
    }
    
    addCar(car) {
        this.cars.push(car);
    }

    displayService() { 
        console.log(this.name ); 
        this.cars.forEach((function(x){console.log(x.model)}))
    };
}

module.exports = CarService;