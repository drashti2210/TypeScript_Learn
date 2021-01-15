"use strict";
// Basics
exports.__esModule = true;
// Use of let
var x = "hello world";
x = "hello mars";
// x = 42; //ERROR
// Use of const
var y = "hello world";
var z;
z = 41;
z = "abc";
var zz;
zz = 41;
// zz = "abc"; // ERROR
// ARRAYS
var aa = [];
aa.push(33);
// aa.push("abc"); // ERROR
var bb = [
    123,
    "Fake Street",
    "Nowhere, USA",
    10110
];
// bb = [1, 2, 3]; // ERROR
// Tuple
var xx = [32, 31];
var yy = [32, 31];
//OBJECTS
var cc;
cc = {
    streetName: "Fake Street",
    houseNumber: 123
};
// cc = {
//   houseNumber: 33
// }; //ERROR
// Optional Operator
var dd;
dd = {
    houseNumber: 33
};
var ee = { houseNumber: 33 };
var contactInfo = Math.random() > 0.5
    ? {
        name: "Drashti",
        phone: 9712649594
    }
    : {
        name: "Drashti",
        email: "drashtijtandel@gmail.com"
    };
contactInfo.name;
var otherContactInfo = {
    name: "Drashti",
    email: "drashtijtandel@gmail.com",
    phone: 9712649594
};
otherContactInfo.name;
otherContactInfo.email;
otherContactInfo.phone;
// never
var zzz = {};
exports["default"] = {};
