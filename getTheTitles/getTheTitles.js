const getTheTitles = function(arr) {
    let output = []
    arr.map(a => {output.push(a.title)})
    return output;
}

module.exports = getTheTitles;
