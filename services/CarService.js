function forEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i]
        callbackFunction(arrayElement);
    }
}

class CarService {

    constructor (name, country) {
        this.name = name;
        this.country = country;
        this.cars = new Array();
    }
    
    addCar(car) {
        this.cars.push(car);
    }

    displayCustomName(name){
        console.log(name);
    }

    displayService() {         

        forEach(this.cars, (car) => {
            this.displayCustomName("FredCustom");
            console.log(car);
        })
    }

    returnAllCars() {
        return this.cars;
    }
}

module.exports = CarService;