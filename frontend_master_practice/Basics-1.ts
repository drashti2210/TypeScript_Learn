// Basics

// Use of let
let x = "hello world";
x = "hello mars";
// x = 42; //ERROR

// Use of const
const y = "hello world";
let z;
z = 41;
z = "abc";

let zz: number;
zz = 41;
// zz = "abc"; // ERROR

// ARRAYS
let aa: number[] = [];
aa.push(33);
// aa.push("abc"); // ERROR

let bb: [number, string, string, number] = [
    123,
    "Fake Street",
    "Nowhere, USA",
    10110
];

// bb = [1, 2, 3]; // ERROR

// Tuple
const xx = [32, 31];
const yy: [number, number] = [32, 31];

//OBJECTS

let cc: { houseNumber: number; streetName: string };
cc = {
    streetName: "Fake Street",
    houseNumber: 123
};

// cc = {
//   houseNumber: 33
// }; //ERROR

// Optional Operator
let dd: { houseNumber: number; streetName?: string };
dd = {
    houseNumber: 33
};

// Using Interface
interface Address {
    houseNumber: number;
    streetName?: string;
}

let ee: Address = { houseNumber: 33 };

// UNION & INTERSECTION

export interface HasPhoneNumber {
    name: string;
    phone: number;
}

export interface HasEmail {
    name: string;
    email: string;
}

let contactInfo: HasEmail | HasPhoneNumber =
    Math.random() > 0.5
        ? {
            name: "Drashti",
            phone: 9712649594
        }
        : {
            name: "Drashti",
            email: "drashtijtandel@gmail.com"
        };

contactInfo.name;

let otherContactInfo: HasEmail & HasPhoneNumber = {
    name: "Drashti",
    email: "drashtijtandel@gmail.com",
    phone: 9712649594
};

otherContactInfo.name;
otherContactInfo.email;
otherContactInfo.phone;

// never
const zzz: any = {} as never;

export default {};
