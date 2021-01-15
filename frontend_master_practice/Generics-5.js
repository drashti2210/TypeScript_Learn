"use strict";
exports.__esModule = true;
function wrappedValue(x) {
    return {
        value: x
    };
}
var val = { value: [] };
val.value;
var stringFilter = function (val) { return typeof val === "string"; };
// stringFilter(0); //ERROR
stringFilter("abc");
var truthyFilter = function (val) { return val; };
truthyFilter(0);
truthyFilter(1);
truthyFilter("");
truthyFilter(["abc"]);
// function resolveOrTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
//     return new Promise<T>((resolve, reject) => {
//         const task = setTimeout(() => reject("time up!"), timeout);
//         promise.then(val => {
//             clearTimeout(task);
//             resolve(val);
//         });
//     });
// }
// resolveOrTimeout(fetch(""), 3000);
function arrayToDict(array) {
    var out = {};
    array.forEach(function (val) {
        out[val.id] = val;
    });
    return out;
}
var myDict = arrayToDict([
    { id: "a", value: "first", lisa: "Huang" },
    { id: "b", value: "second" }
]);
function startTuple(a) {
    return function finishTuple(b) {
        return [a, b];
    };
}
var myTuple = startTuple(["first"])(42);
function drawShapes1(shapes) {
    shapes.forEach(function (s) { return s.draw(); });
}
function drawShapes2(shapes) {
    shapes.forEach(function (s) { return s.draw(); });
}
