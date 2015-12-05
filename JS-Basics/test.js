/**
 * Created by brandonhebbert on 12/4/15.
 */
function codeLove() {
    return "I love code";
}

//function codeFriend(fn) {
//    var run = false;
//    return function() {
//        if (!run) {
//            run = true;
//            return fn();
//        } else {
//            return null;
//        }
//    }
//}
//var codeEcho = codeFriend(codeLove);
//console.log(codeEcho());

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
console.log(codeEcho());