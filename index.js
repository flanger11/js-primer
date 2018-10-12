const Car = require("./Car");
const CarService = require("./services/CarService")

const car1 = new Car("Ford", "Escort", 2012);
const car2 = new Car("GM", "Camero", 2015);
const car3 = new Car("Toyota", "Yaris", 2011);
const car4 = new Car("Buick", "Lesabre", 1981)


// car1.DisplayCarInfo();
// car3.DisplayCarInfo();

 const service = new CarService("Freds Auto Repair", "US");
// service.addCar(car1);
// service.addCar(car2); 
// service.addCar(car3);
// service.addCar(car4);
//service.displayService();

const docObservable = service.getSecretDocuments();
docObservable.subscribe({
    next: (secretDocs) => {
        console.log(secretDocs);
    },
    error: (error) => {
        console.log(error);
    },
    complete: () => {
        console.log("Complete")
    }
});

// const newArray = new Array();

// newArray.push(service.returnAllCars());
 
// const {brand, model, year} = car3;
// console.log(newArray);
// console.log(...newArray);
// console.log(brand);

