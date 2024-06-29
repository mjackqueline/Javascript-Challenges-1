function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3, 5));
console.log(addition(-3, -6));
console.log(addition(7, 3));

function hoursIntoSeconds(hours) {
    return hours * 60 * 60;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24))

function calcPerimeter(length, width) {
    return length * 2 + width * 2
}

console.log(calcPerimeter(6,7))
console.log(calcPerimeter(20,10))
console.log(calcPerimeter(2,9))

function calcTriangleArea(base, height) {
    return (base * height)/2
}

console.log(calcTriangleArea(3,2))
console.log(calcTriangleArea(10,10))
console.log(calcTriangleArea(20,20))

function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'))
console.log(appendFrontend('Banana'))
console.log(appendFrontend('Orange'))

// Option 1
// function sumGreaterThan100(num1, num2) {
//     if (num1 +num2 > 100){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// Option 2
// function sumGreaterThan100(num1, num2) {
//     if (num1 +num2 > 100){
//         return true;
//     }
//     return false;
    
// }

// Option 3 and * Best Practice *
function sumGreaterThan100(num1, num2) {
    return num1 +num2 > 100
}

console.log(sumGreaterThan100(20,10))
console.log(sumGreaterThan100(50,60))
console.log(sumGreaterThan100(100,-50))

function lessThanOrEqualToZero(number) {
    return number <= 0;
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

function isNotZero(element) {
    return element !== 0
}

console.log (isNotZero(5))
console.log (isNotZero(0))
console.log (isNotZero('null'))

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(4,2))
console.log(calcRemainder(7,8))
console.log(calcRemainder(9,8))

function isOdd(number) {
    return number % 2 !== 0
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

// function booleanInterger(number) {
//     if (number/2 === 1) {
//         return -1
//     }
//     else {
//         return 1
//     }
// }

// function booleanInterger(number) {
//     if (number % 2 === 0) {
//         return 1
//     }
//     else {
//         return -1
//     }
// }

function booleanInterger(number) {
    return number % 2 === 0 ? 1: -1;
}

console.log(booleanInterger(1))
console.log(booleanInterger(2))
console.log(booleanInterger(5))

function isLoggedInAndSubscribed(log, sub) {
    return (log === 'LOGGED_IN' && sub === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))

function isLoggedInAndSubscribed(log, sub) {
    return (log === 'LOGGED_IN' || sub === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))