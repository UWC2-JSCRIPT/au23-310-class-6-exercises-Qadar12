/**
 * Car class
 * @constructor
 * @param {String} model
 */

/*
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
  constructor(model) {
    this.currentSpeed = 0;
    this.model = model;
  }

  accelerate() {
    return (this.currentSpeed += 1);
  }

  brake() {
    return (this.currentSpeed -= 1);
  }

  toString() {
    return `${this.model} is going ${this.currentSpeed} mph`;
  }
}
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const honda = new Car("honda");

honda.accelerate();
honda.accelerate();
honda.brake();
honda.toString();

*/
class Car {
  constructor(make, model, maxSpeed) {
    this.make = make;
    this.model = model;
    this.maxSpeed = maxSpeed;
  }
  honk() {
    console.log("Beep");
  }
  toString() {
    return `${this.make} ${this.model} with a max speed of ${this.maxSpeed}`;
  }
}
class Porsche extends Car {
  constructor(model, maxSpeed) {
    super("Porsche", model, maxSpeed);
    this.turboCharged = true;
  }
}
const nineEleven = new Porsche("911", 160);
console.log(nineEleven.toString());
nineEleven.honk();

// Panamera or 918 Spyder

