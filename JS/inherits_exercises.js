// Function.prototype.inherits = function(parent){
//   function Surrogate () {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };
// Function.prototype.inherits = function(parent) {
//   this.prototype = Object.create(parent.prototype);
//   this.prototype.constructor = this;
// };


function MovingObject () {
  
}

MovingObject.prototype.test = function() {
    console.log("test");
}; 

function Ship () {
  // static Ship.inherits(parent) {
  //   this.prototype = Object.create(parent.prototype);
  //   this.prototype.constructor = this;
  // }
}

class Ship extends MovingObject() {
  constructor(name) {
    super(name)
  }
}

Ship.inherits = function() {
  
}


Ship.inherits(MovingObject);

function Asteroid () {
  // function wow() {
  //   console.log("wow");
  // }
}

MovingObject.prototype.wow= function () {
  console.log("wow");
};


Asteroid.inherits(MovingObject);