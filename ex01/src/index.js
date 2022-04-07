// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array
// Create function below this line
function myArrayFunction(myItems) {
    myArr = myItems;
    myArr[2] = 6; // 2, 4, 0, 8, 10
    return myItems;
}
// End of creating a function
console.log(myArrayFunction(myArr));
module.exports = myArrayFunction