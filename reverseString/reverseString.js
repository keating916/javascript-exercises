const reverseString = function(word) {
    console.log(word.split(""))
    let i= word.length -1;
    let array = ""
    while(i>= 0) {
        array = array + word[i];
        i--
    }
    return array;
}
module.exports = reverseString
