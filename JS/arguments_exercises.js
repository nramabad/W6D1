function sum(...nums) {
  let sum = 0;
  nums.forEach((element) => {
    sum += element;
  });
  return sum;
}
// 
// function sum() {
//   let new_arr = Array.from(arguments);
//   let sum = 0;
//   new_arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// }

// Function.prototype.myBind = function (context) {
//   return (() => this.apply(context));
// };



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");



// Function.prototype.myBind = function () {
//   const temp = Array.from(arguments);
//   const ctx = temp.shift();
//   // this is the function says!
//   return () => this.apply(ctx, temp);
// };

// Function.prototype.myBind = function (ctx, ...bindTimeArgs) {
// 
//   // this is the function says!
//   return () => this.apply(ctx, bindTimeArgs);
// };

// Function.prototype.myBind = function (ctx) {
// 
//   // this is the function says!
//   return (...bindTimeArgs) => this.apply(ctx, bindTimeArgs);
// };

// Function.prototype.myBind = function (ctx, arg1) {
// 
//   // this is the function says!
//   return (arg2) => this.apply(ctx,[arg1, arg2]);
// };

// Function.prototype.myBind = function (ctx) {
// 
//   // this is the function says!
//   return (arg1, arg2) => this.apply(ctx,[arg1, arg2]);
// };


// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
//                      //bind time args      //call time args 
// 
// 
// // Pavlov says meow to Kush!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true
// 
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0; 
      numbers.forEach((el) => {
        sum += el;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const sum1 = curriedSum(4);
// console.log(sum1(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  let args = [];
  
  // this is the function says!
  let insideFunc = (arg) => {
    console.log(args);
    args.push(arg);
    
    if (args.length != numArgs) {
      return insideFunc;
    } else {
     return this.apply(null, args);
   }
  };
  return insideFunc;   
};
// Function.prototype.curry = function(numArgs) {
//   let args = [];
//   // this is the function says!
//   let insideFunc = (arg) => {
// 
//     if (args.length != numArgs) {
//       args.push(arg);
//       return insideFunc;
//     } else {
//      return curry;
//      this
//    }
//   };
// 
// };





