import { HasEmail } from "./Basics-1";

//TOP TYPES

let myAny: any = 32;
let myUnknown: unknown = "hello, unknown";

// Below is possible
// myAny.foo.bar.baz;
// myUnknown.foo;

async function logWhenResolved(p: Promise<any>) {
  const val = await p;
  console.log("Resolved to: ", val);
}

// myUnknown.split(", "); // ERROR


if (typeof myUnknown === "string") {
  
  myUnknown.split(", "); 
}

function isHasEmail(x: any): x is HasEmail {
  return typeof x.name === "string" && typeof x.email === "string";
}

if (isHasEmail(myUnknown)) {
  // In here, myUnknown is of type HasEmail
  console.log(myUnknown.name, myUnknown.email);
}

function isDefined<T>(arg: T | undefined): arg is T {
  return typeof arg !== "undefined";
}

function assertIsStringArray(arr: any[]): asserts arr is string[] {
  if (!arr) throw new Error('not an array!');
  const strings = arr.filter(i => typeof i === 'string');
  if (strings.length !== arr.length) throw new Error('not an array of strings');
}

const arr: (string|number)[] = ['3', 12, '21'];
assertIsStringArray(arr);
arr;


let aa: unknown = 41;
let bb: unknown = ["a", "string", "array"];
bb = aa; 

interface BrandedA {
  __this_is_branded_with_a: "a";
}
function brandA(value: string): BrandedA {
  return (value as unknown) as BrandedA;
}
function unbrandA(value: BrandedA): string {
  return (value as unknown) as string;
}

interface BrandedB {
  __this_is_branded_with_b: "b";
}
function brandB(value: { abc: string }): BrandedB {
  return (value as unknown) as BrandedB;
}
function unbrandB(value: BrandedB): { abc: string } {
  return (value as unknown) as { abc: string };
}

let secretA = brandA("This is a secret value");
let secretB = brandB({ abc: "This is a different secret value" });

// secretA = secretB; 
// unbrandB(secretA);
// unbrandA(secretB);

let revealedA = unbrandA(secretA);
let revealedB = unbrandB(secretB);

//BOTTOM TYPE: never

// let n: never = 4;

let x = "abc" as string | number;

if (typeof x === "string") {
  // x is a string here
  x.split(", ");
} else if (typeof x === "number") {
  // x is a number here
  x.toFixed(2);
} else {
  // x is a never here
}

class UnreachableError extends Error {
  constructor(val: never, message: string) {
    super(`TypeScript thought we could never end up here\n${message}`);
  }
}

let y = 4 as string | number;

if (typeof y === "string") {
  // y is a string here
  y.split(", ");
} else if (typeof y === "number") {
  // y is a number here
  y.toFixed(2);
} else {
  throw new UnreachableError(y, "y should be a string or number");
}
