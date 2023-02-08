// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toUpperCase() === name.toUpperCase();
    })
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toUpperCase().substring(0, name.length) === name.toUpperCase();
    })
}

function matchName(drivers, input) {
    return drivers.filter(function (driver) {
        return driver.name === input;
    });
}