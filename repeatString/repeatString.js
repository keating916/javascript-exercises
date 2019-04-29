const repeatString = function(str, num) {
    let out = ""
    if(num < 0) {
        return 'ERROR';
    }else {
        for(let i = 0;i < num; i++) {
            out= `${out}${str}`;
        };
    }
    return out;
}

module.exports = repeatString
