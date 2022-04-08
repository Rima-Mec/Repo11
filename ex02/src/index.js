// Only change code below this code
var myStr = "Paragon is the best!"
function useMethods(str) {
    var myReverse;
    var counterCharacters;
    //
    myReverse = myStr.split(""); // [ "P","a","r","a","g","o","n"; "i","s", "t","h","e", "b","e","s","t","!"]
    //  
    myStr =myStr.reverse(); 
    countCharacters = myStr.map(()=>s.length);
    myStr=myStr.map((r)=>r.split("").reverse().join(""));
    myReverse = myStr.join("");
    return myReverse, countCharacters;

};


// Only change code above this code
console.log(useMethods(myStr));
module.export = useMethods;
