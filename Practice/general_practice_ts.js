"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Data Type
var isNum = false;
var n1 = 6;
var clr = "blue";
console.log(clr);
clr = 'red';
console.log(clr);
//Array
var nums = [1, 2, 3, 4, 5];
console.log(nums);
var nums1 = [4, 5, 6, 7, 5];
console.log(nums1);
var tpl;
tpl = ["hello", 10];
//tpl = [10, "hello"]; // Error
//tpl[3]="World"; //Not Possible
//enum
var frts;
(function (frts) {
    frts[frts["apple"] = 0] = "apple";
    frts[frts["orange"] = 1] = "orange";
    frts[frts["cherry"] = 2] = "cherry";
})(frts || (frts = {}));
;
var f = frts.apple;
console.log("Value of f is " + f);
var f1 = frts.orange;
console.log("Value of f1 is " + f1);
var frName = frts[2];
console.log("fruit at index 2 " + frName);
var any1 = 4;
any1 = "maybe a string instead";
console.log("Value of any1 " + any1);
any1 = false;
console.log("Value of any1 after change " + any1);
//const num: number = cnt; //ERROR
var anyType = 10;
console.log("Type of anyType " + typeof anyType);
var unType = 12;
console.log("Type of unType " + typeof unType);
var u = undefined;
var nType = null;
console.log(u, nType);
var strVal = "this is a string";
var strLen = strVal.length;
console.log(strVal, strLen);
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var n = name_1[_i];
            console.log(n);
        }
    }
}
disp("Hello");
console.log("this is a practice file...");
disp(["Mark", "Tom", "Mary", "John"]);
function doAlign(alignment) {
    console.log(alignment);
}
doAlign("LEFT");
var arr;
arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var n = arr_1[_i];
    console.log(n);
}
arr = ["Mumbai", "Pune", "Delhi", "Ahmedabad"];
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var n = arr_2[_a];
    console.log(n);
}
var aa = 41;
var bb = ["a", "string", "array"];
console.log(aa);
console.log(bb);
bb = aa;
console.log(bb);
// Functions
// Anonymous Function
var myAdd = function (x, y) {
    return x + y;
};
var myAdd1 = function (x, y) {
    return x + y;
};
function fullname(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = fullname("Drashti", "Tandel");
console.log("Full NAme " + result1);
// let result2 = fullname("Bob"); //ERROR
//let result3 = fullnameame("Bob", "Adams", "Sr."); // ERROR
function restParam(val1) {
    var val = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        val[_i - 1] = arguments[_i];
    }
    return val1 + " " + val.join(" ");
}
var result4 = restParam("asd", "asdsfd", "dfdf", "sfdfdfd", "efrgr");
console.log("Rest Param " + result4);
//Arrow Function
var total = function (x, y) { return x + y; };
function add1(a, b) {
    return a + b;
}
add1("Hello ", "World");
add1(10, 20);
// Generic Function
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400);
myStrArr.push("TypeScript");
myNumArr.push("Hi");
myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);
// Multiple Generic
function displayType(id, name) {
    console.log("Type of 1st is " + typeof (id) + " & Type of 2nd is " + typeof (name));
}
displayType(100, "Drashti Tandel");
var UnreachableError = /** @class */ (function (_super) {
    __extends(UnreachableError, _super);
    function UnreachableError(val, message) {
        return _super.call(this, "TypeScript thought we could never end up here\n" + message) || this;
    }
    return UnreachableError;
}(Error));
// TypeGuard
var z = 4;
if (typeof z === "string") {
    console.log(z);
    z.split(", ");
}
else if (typeof z === "number") {
    console.log(z);
    z.toFixed(2);
}
else {
    throw new UnreachableError(z, "z should be a string or number");
}
// namespace 
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
for (var _b = 0, strings_1 = strings; _b < strings_1.length; _b++) {
    var s = strings_1[_b];
    for (var name_2 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_2].isAcceptable(s) ? "matches" : "does not match") + " " + name_2);
    }
}
