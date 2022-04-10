// Only change code below this code
var myStr = "Paragon is the best!"
function useMethods(str) {
    myStr=str;
    var myReverse; 
    var countCharacters;

    myStr=str.split(""); // [ "Paragon" "is" "the" "best!"]
 
    myReverse=myStr.reverse(); // ["!tseb eht si nogaraP"]

    countCharacters=myReverse.join(""); // "!tseb eht si nogaraP"

    countCharacters =myReverse.map((s)=>s.length);

    myStr=myStr.map((r)=>r.split("").reverse().join(""));
    return myReverse, countCharacters;

};

// Only change code above this code

console.log(useMethods(myStr));
module.exports = useMethods;
