// Data Type
let isNum: boolean = false;
let n1: number = 6;
let clr: string = "blue";
console.log(clr);
clr = 'red';
console.log(clr);

//Array
let nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);
let nums1: Array<number> = [4, 5, 6, 7, 5];
console.log(nums1);
let tpl: [string, number];
tpl = ["hello", 10];
//tpl = [10, "hello"]; // Error
//tpl[3]="World"; //Not Possible

//enum
enum frts {
    apple,
    orange = 1,
    cherry
};
let f: frts = frts.apple;
console.log(`Value of f is ${f}`);
let f1: frts = frts.orange;
console.log(`Value of f1 is ${f1}`);
let frName: string = frts[2];
console.log(`fruit at index 2 ${frName}`);
let any1: unknown = 4;
any1 = "maybe a string instead";
console.log(`Value of any1 ${any1}`);
any1 = false;
console.log(`Value of any1 after change ${any1}`);
declare const cnt: unknown;
//const num: number = cnt; //ERROR
let anyType: any = 10;
console.log(`Type of anyType ${typeof anyType}`);
let unType: unknown = 12;
console.log(`Type of unType ${typeof unType}`);
let u: undefined = undefined;
let nType: null = null;
console.log(u, nType);

let strVal: unknown = "this is a string";
let strLen: number = (<string>strVal).length;
console.log(strVal, strLen);

function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name);
    } else {
        for (let n of name) {
            console.log(n)
        }
    }
}
disp("Hello");
console.log("this is a practice file...");
disp(["Mark", "Tom", "Mary", "John"]);

type Alignment = "LEFT" | "RIGHT" | "CENTER";
function doAlign(alignment: Alignment): void {
    console.log(alignment);
}
doAlign("LEFT");

let arr: number[] | string[];
arr = [1, 2, 3, 4, 5];
for (let n of arr) {
    console.log(n)
}
arr = ["Mumbai", "Pune", "Delhi", "Ahmedabad"];
for (let n of arr) {
    console.log(n)
}

let aa: unknown = 41;
let bb: unknown = ["a", "string", "array"];
console.log(aa);
console.log(bb);
bb = aa;
console.log(bb);

// Functions
// Anonymous Function
let myAdd = function (x:number, y:number):number {
    return x + y;
};

let myAdd1: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};
function fullname(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
let result1 = fullname("Drashti", "Tandel");
console.log(`Full NAme ${result1}`);
// let result2 = fullname("Bob"); //ERROR
//let result3 = fullnameame("Bob", "Adams", "Sr."); // ERROR
function restParam(val1: string, ...val: string[]) {
    return val1 + " " + val.join(" ");
}
let result4 = restParam("asd", "asdsfd", "dfdf", "sfdfdfd", "efrgr");
console.log(`Rest Param ${result4}`);

//Arrow Function
let total = (x: number, y: number) => x + y;

//Overload
function add1(a: string, b: string): string;
function add1(a: number, b: number): number;
function add1(a: any, b: any): any {
    return a + b;
}
add1("Hello ", "World");
add1(10, 20);

// Generic Function
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400);
myStrArr.push("TypeScript");
myNumArr.push("Hi");
myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);

// Multiple Generic
function displayType<T, U>(id: T, name: U): void {
    console.log(`Type of 1st is ${typeof (id)} & Type of 2nd is ${typeof (name)}`);
}
displayType<number, string>(100, "Drashti Tandel");

class UnreachableError extends Error {
    constructor(val: never, message: string) {
        super(`TypeScript thought we could never end up here\n${message}`);
    }
}

// TypeGuard
let z = 4 as string | number;
if (typeof z === "string") {
    console.log(z);
    z.split(", ");
} else if (typeof z === "number") {
    console.log(z);
    z.toFixed(2);
} else {
    throw new UnreachableError(z, "z should be a string or number");
}

// namespace 
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
let strings = ["Hello", "98052", "101"];
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators) {
        console.log(
            `"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"
            } ${name}`
        );
    }
}




