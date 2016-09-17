(function(){
	'use strict';

	var _id = function _id(id){
		return document.getElementById(id);
	};

	var _class = function _class(names){
		return document.getElementsByClassName(names);
	};

	var randomGenerator = function randomGenerator() {
        return Math.ceil((Math.random() * 10));
    };

// Question One: 

    var buttonOne = _id('buttonOne');
      console.log(buttonOne);

          function suMuDiSub() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The X value will be: ' + x);
          console.log('The Y value will be: ' + y);

          console.log('The sum is: ' + (x + y));
          console.log('The subtraction is: ' + (x - y));
          console.log('The division is: ' + (x / y));
          console.log('The multiplication is: ' + (x * y));
          console.log('The modulus will be : ' + (x % y));

      }

      buttonOne.addEventListener("click", suMuDiSub, false);


// Question Two


      var buttonTwo = _id('buttonTwo');
      console.log(buttonTwo);

      function main() {
          sum();
          subtract();
          multi();
          divison();
          modulus();
      }

      function sum() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The sum is: ' + (x + y));
          //subtract();
      }

      function subtract() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The subtraction is: ' + (x - y));
          //multi();
      }

      function multi() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The multiply is: ' + (x * y));
          //divison();
      }


      function divison() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The division is: ' + (x / y));
          //modulus();
      }

      function modulus() {
          var x = randomGenerator(),
              y = randomGenerator();

          console.log('The modulus is: ' + (x % y));
      }


      buttonTwo.addEventListener('click', main, false);

// Question Three

    var buttonThree = _id('buttonThree');
    console.log(buttonThree);


    function main() {

        var x = add(randomGenerator(), randomGenerator());
        var y = sub(randomGenerator(), randomGenerator());
        var z = multi(randomGenerator(), randomGenerator());
        var w = divide(randomGenerator(), randomGenerator());
        var u = modulus(randomGenerator(), randomGenerator());
        console.log('The Sum is ' + x);
        console.log('The Subtraction is ' + y);
        console.log('The Multiplication is ' + z);
        console.log('The Division is ' + w);
        console.log('The Modulus is ' +u);

    }

    function add(a, b) {
    	console.log('add ' + a + ' and ' + b)
        return a + b;
    }

    function sub(a, b) {
        console.log('sub ' + a + ' and ' + b);
        return a - b;

    }

    function multi(a, b) {
        console.log('Multi ' + a + ' and ' + b);
        return a * b;
    }

    function divide(a, b) {
        console.log('divide ' + a + ' and ' + b);
        return a / b;
    }

    function modulus(a, b) {
        console.log('modulus ' + a + ' and ' + b);
        return a % b;
    }


    buttonThree.addEventListener('click', main);

// Question Four


    function sum(a, b){
      var work = a + b; //local is work
      return work;
    }
    var total = sum(2, 3); //global is total
    console.log(total);
// Question Five

        function sum(a, b) {
            var x = a + b;
            return x;
        }

        function multi(a, b) {
            var y = a * b;
            return y;
        }

        function modulus(a, b) {
            var v = a % b;
            return v;
        }

        var z = sum(3, 5);
        var w = multi(3, 5);
        var v = modulus(3, 5);
        console.log(z);
        console.log(w);
        console.log(v);

// Question Six

	var buttonFour = _id('buttonFour');
        console.log(buttonFour);

        function sum() {
            var x = randomGenerator(),
                y = randomGenerator();
            console.log('The sum is: ' + (x + y));
        }

        buttonFour.addEventListener('click', sum, false);

        var buttonFive = _id('buttonFive');
        console.log(buttonFive);

        function sub() {
            var x = randomGenerator(),
                y = randomGenerator();
            console.log('The subtraction is: ' + (x - y));
        }

        buttonFive.addEventListener('click', sub, false);

        var buttonSix = _id('buttonSix');
        console.log(buttonSix);

        function multi() {
            var x = randomGenerator(),
                y = randomGenerator();
            console.log('The mulitplication is: ' + (x * y));
        }
        
        buttonSix.addEventListener('click', multi, false);

        var buttonSeven = _id('buttonSeven');
        console.log(buttonSeven);

        function divide() {
            var x = randomGenerator(),
                y = randomGenerator();
            console.log('The division is: ' + (x / y));
        }
        
        buttonSeven.addEventListener('click', divide, false);

        var buttonEight = _id('buttonEight');
        console.log(buttonEight);

        function modulus() {
            var x = randomGenerator(),
                y = randomGenerator();
            console.log('The modulus is: ' + (x % y));
      }

        
        buttonEight.addEventListener('click', modulus, false);

// Question 7

	var buttonNine = _id('buttonNine');
        console.log(buttonNine);
        
        function twoOper(){
        	addOne();
        	subOne();
        	
        }
          	function addOne(a, b){  
          		var a = 5, 
            		b = 3; 
                 a++;
               console.log('The sum is: ' + (a + b));
            }

            function subOne(a, b){
            	var a = 5, 
            		b = 3;
            		a--;
            	console.log('The sub is: ' + (a - b));

            }
  			

    buttonNine.addEventListener('click', twoOper, false);

    var fCel = _id('fCel');
        console.log(fCel);

      function fToC(fahrenheit){
      var fTemp = randomGenerator();
      var fToCelsius = (fTemp - 32) * 5 / 9;
      console.log('The fahrenheit is ' + fTemp, 'The Celsius is ' + fToCelsius)
    }
       
fCel.addEventListener('click', fToC, false);

	var bruce = _id('bruce'),
		wayne = _id('wayne');

	function bruceToWayne(){
		wayne.innerHTML = 'The name is Wayne'
	}

bruce.addEventListener('click', bruceToWayne, false);
})();