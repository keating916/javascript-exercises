const sumAll = function(var1, var2) {
 let i = [var1, var2]
 i.sort();
 let sum = 0
 //console.log(i[0])
 //console.log(i[1])
 if(i[0] < 0 || typeof var1 != "number" || typeof var2 !="number") {
     return "ERROR"
 }else {
     for(let t = i[0]; t <= i[1]; t++) {
         sum += t;
     }
 }
 return sum;
 //console.log(sum);
}
//sumAll(5,1);
module.exports = sumAll
