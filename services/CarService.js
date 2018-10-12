const Observable = require('../Observable');

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

    getSecretDocuments() {

        return new Observable( (observer) => {
            setTimeout(() => {
                let secretDocs = "SUPER SECRET DOCUMENT, DO NOT SHARE";
                observer.next(secretDocs);
                observer.next(secretDocs);
                observer.next(secretDocs);
            }, 4000);
            setTimeout(() => {
                observer.error("This is an error")
            }, 8000)
        })

    }
}

module.exports = CarService;