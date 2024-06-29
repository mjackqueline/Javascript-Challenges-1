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