let findTheOldest = function(people) {
    people.map(a => {
        if(!a.yearOfDeath) {
            a.yearOfDeath = 2019;
        }
        a.age = a.yearOfDeath - a.yearOfBirth})
    people.sort((a,b) => (a.age - b.age)).reverse()
    return people[0]
    ;
}

module.exports = findTheOldest
