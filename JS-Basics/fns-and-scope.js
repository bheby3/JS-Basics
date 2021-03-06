//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  } else {
    return false;
  }
}
console.log(isTyler(name));
//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName() {
  //var answer = prompt("What is you name?");
  return prompt("What is you name?");
}

  //Code Here
//var answer = getName();
//console.log(answer);
//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
  var answer = getName();
  alert("Welcome, " + answer);
}
welcome();


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
//parameters are the variable declared in the parentheses when you are declaring a function
//arguments are what you pass into the parameters when invoking the function
//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//NaN
//0
//false
//''
//undefined
//null

//Next Problem



//Create a function called myName that returns your name
function myName() {
  return "Brandon Hebbert";
}
  //Code Here



//Now save the function definition of myName into a new variable called newMyName
var newMyName = myName;
  //Code Here

//Now alert the result of invoking newMyName
alert(newMyName());


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn() {
  return function() {
    return "Brandon Hebbert";
  }
}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();
  //Code Here

//Now invoke innerFn.
innerFn();