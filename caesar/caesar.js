const caesar = function(string, int) {
    let out 
    console.log(int);
    if(int > 26 || int < -26) {
        int = int %26;
    }
    if(int > 0) {
        out = pos(string, int);
    }else {
        out = neg(string, int);
    }
    console.log(out);
    return out;
}

module.exports = caesar

function pos(string, int) {
    let l = string.length;
    let output = ""
    for(let i = 0; i < l; i++) {
        let c = string.charCodeAt(i)
        console.log(c);
        if(c > 64 && c <= 90) {
            if(c > (90 - int)) {
                output += String.fromCharCode(64 + int - (90 -c));
                console.log(1)
            }else {
            output += String.fromCharCode(c + int);
            console.log(2)
            }
        }else if (c >= 97 && c <= 122) {
            if(c > 122 - int) {
                output += String.fromCharCode(96 + int - (122 -c));
                console.log(3)
            }else {
            output += String.fromCharCode(c + int);
            console.log(4)
            }
        }else {
            output += string[i]
        }
    }
    return output;
}
function neg(string, int) {
    let l = string.length;
    let output = ""
    for(let i = 0; i < l; i++) {
        let c = string.charCodeAt(i)
        console.log(c);
        if(c > 64 && c <= 90) {
            if(c < (65 - int)) {
                output += String.fromCharCode(91 + int + (c - 65));
                console.log(-1)
            }else {
            output += String.fromCharCode((c + int));
            console.log(-2)
            }
        }else if (c >= 97 && c <= 122) {
            if(c < 97 - int) {
                output += String.fromCharCode(123 + int + (c - 97));
                console.log(-3)
            }else {
            output += String.fromCharCode(c + int);
            console.log(-4)
            }
        }else {
            output += string[i]
        }
    }
    return output;
}