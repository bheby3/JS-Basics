//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.
var inner = outer();
  //Code Here
inner();
//Once you do that, invoke inner.
//console.log(inner());
  //Code Here



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
//function foo() {
//  var a = 2;
//
//  function baz() {
//    return a; // 2
//  }
//
//  bar( baz );
//  }
//
//  function bar(fn) {
//  fn(); // look ma, I saw closure!
//}
//console.log(foo());


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/
function makeCounter() {
  var count = 0;
  return function(){
    count = count + 1;
    console.log(count);
    return count;
  }
}


  //Code Here
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4
  count();


//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'.
  Write a second function named codeFriend that accepts the first function
  as it's first parameter. The second function should return a new third function.
  Store the third function in a variable, codeEcho which, when invoked, invokes
  the first, original function that was passed in, but will only ever do so
  once (returns null after first invocation).
*/


function codeLove() {
  return "I love code";
}

//console.log(codeLove());

//Next Problem
function codeFriend(fn) {
  var run = false;
  return function() {
    if (run) {
      return null;
    } else {
      run = true;
      return fn();
    }
  }
}
var codeEcho = codeFriend(codeLove);
codeEcho();


//var codeEcho = codeFriend(codeLove);
//console.log(codeEcho());
//function codeFriend(fn) {
//  var run = false;
//  return function() {
//    if (!run) {
//      run = true;
//      return fn();
//    } else {
//      return null;
//    }
//  }
//}





/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters.
   The first parameter will be an anonymous function and the second parameter, 'N', will be a number.
    Now, in 'fnCounter', allow the anonymous function to be invoked 'N' number of times.
    After it's been invoked 'N' number of times, return 'STOP'.
*/
function fnCounter(fn, N) {
  for (var i = 0; i <= N; i++) {
    if (i < N) {
      return fn();
    } else {
      return "STOP";
    }
  }
}
var fn = function() {};

fnCounter(fn, 3);

//Next Problem




//  var counter = function() {
//    for (var i = 1; i <= 5; i++) {
//      setTimeout(function timer() {
//        console.log(i);
//      }, i * 1000);
//    }
//  };
//
//counter();
//counter();
  //Above you have a function named counter. Examine the function (without running the code)
  // then below write what you expect to happen when the function is invoked. *Hint: setTimeout
  // calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here
//It will log 1 2 3 4 5 incrementing i by one each second.
//
//  Now, run the function in your console and note what happens.
//
//  Was your answer right or wrong?
// I was wrong.  Counter only starts logging i once i is not <= 5 so the first time i is not <= to 5 is six.
//    //Answer Here
  // Counter actually logs the number 6 five times.

  //Fix the counter function so that it works the way you expect it to work.
// (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)

    //Code Here
var counter = function() {
    for (var i = 1; i <= 5; i++) {
      (function () {
        var j = i;
        setTimeout(function timer() {
          console.log(j);
        }, j * 1000);
      })();
    }
  };

counter();

//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


