const Car = require("./Car");
const CarService = require("./services/CarService")

const car1 = new Car("Ford", "Escort", 2012);
const car2 = new Car("GM", "Camero", 2015);
const car3 = new Car();


car1.DisplayCarInfo();
car3.DisplayCarInfo();

const service = new CarService("xyz", "US");
service.addCar(car1);
service.addCar(car3);
service.displayService();