// #1
var counter = (function() {
    var count = 0;
    return function(n) {
        if (n !== undefined)
        count = n;
        return count++;
    };
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(25));
console.log(counter());
console.log(counter());

// #2
var counting = (function () {
    var count = 0;
    return {
        value(n) {
            if (n !== undefined)
            count = n;
            return count;
        },
        decrement() {
            count--;
        },
        increment() {
            count++;
        }
    };
}());

console.log(counting.value());
counting.increment();
counting.increment();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(1000));
counting.increment();
counting.increment();
counting.increment();
counting.decrement();
console.log(counting.value());

// #3
var myPrint = (a, b, res) => `${a}^${b}=${res}`;
var myPow = (a, b, cb) => {
    var pow = (x, n) => {
        if ( n !== 1) 
        return x*= pow(x, n-1);
        return x;
    };
    return cb(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));

// #4
// #5
function information() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

var car = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    info: information,
    get used() {
      return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };

//   #6
  var car2 = {
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infinite',
    year: 2019,
    info: information,
    get used() {
      return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };

console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info()); 

// #7
var array = [15, 20, 155, 3, 784, 994, 38];
var myMax = (arr) => Math.max.apply(Math, arr);

console.log(myMax(array));

// #8
var myMul = function(a, b) {
    var x = a * b;
    return x;
}

var myDouble = myMul.bind(null, 2);

console.log(myDouble(5));
console.log(myDouble(10));

var myTriple = myMul.bind(null, 3);

console.log(myTriple(3));
console.log(myTriple(5));

// #9
var arrayNum = [25, 25, 100, 100, 2, 2, 70, 70, 22, 22];
var arrayStr = [
  'Mary',
  'Natali',
  'Kate',
  'John',
  'Tom',
  'Mary',
  'Tom',
  'John'
];

var myUniq = (arr) => {
  var set = new Set();

  arr.forEach((value) => {
    set.add(value);
  });

  return set;
};

console.log(myUniq(arrayNum));
console.log(myUniq(arrayStr));




