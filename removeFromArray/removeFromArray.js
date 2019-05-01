const removeFromArray = function(array, numOne, numTwo = null, numThree = null, numFour = null) {
    let remOne = array.indexOf(numOne);
    if(remOne != -1) {
        array.splice(remOne,1);
    }
    if(typeof numTwo != null && array.indexOf(numTwo) != -1) {
        array.splice(array.indexOf(numTwo), 1);
    }
    if(typeof numThree != null && array.indexOf(numThree) != -1) {
        array.splice(array.indexOf(numThree), 1);
    }
    if(typeof numfour != null && array.indexOf(numFour) != -1) {
        array.splice(array.indexOf(numFour), 1);
    }
    return array;
}
module.exports = removeFromArray
