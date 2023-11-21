/**
 * Car class
 * @constructor
 * @param {String} model
 */

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

const honda = new Car("honda");

honda.accelerate();
honda.accelerate();
honda.brake();
console.log(honda.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 
*/
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car {
  constructor(model, currentSpeed) {
    super(model, currentSpeed);
    this.motor = "electric";
  }

  //modified so its twice as fast
  accelerate() {
    return (this.currentSpeed += 2);
  }

  //modified to include motor
  toString() {
    return `${this.model} has a ${this.motor} motor and is going ${this.currentSpeed} mph`;
  }
}
const rivian = new ElectricCar("Rivian", 160);
rivian.accelerate();
rivian.accelerate();
rivian.brake();
console.log(rivian.toString());
