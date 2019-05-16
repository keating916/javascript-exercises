const fibonacci = function(n) {
    let arr = [1,1,2];
    console.log(n);
    if(typeof n != Number) {
        n = parseInt(n);
    }
    if(n < 1){return "OOPS"}
    else if(n < 3){
        return arr[n-1];
    }else {
        for(let i = 3; i <= n; i++) {
            arr.push(arr[i-1] + arr[i-2])
        }
    }
    return arr[n-1]
}

module.exports = fibonacci
