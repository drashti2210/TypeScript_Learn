import { HasEmail } from "./Basics-1";

function wrappedValue(x: any) {
    return {
        value: x
    };
}

interface WrappedValue<X> {
    value: X;
}

let val: WrappedValue<string[]> = { value: [] };
val.value;

interface FilterFunction<T = any> {
    (val: T): boolean;
}

const stringFilter: FilterFunction<string> = val => typeof val === "string";
// stringFilter(0); //ERROR
stringFilter("abc");

const truthyFilter: FilterFunction = val => val;
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

function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
    const out: { [k: string]: T } = {};
    array.forEach(val => {
        out[val.id] = val;
    });
    return out;
}

const myDict = arrayToDict([
    { id: "a", value: "first", lisa: "Huang" },
    { id: "b", value: "second" }
]);

function startTuple<T>(a: T) {
    return function finishTuple<U>(b: U) {
        return [a, b] as [T, U];
    };
}
const myTuple = startTuple(["first"])(42);

interface Shape {
    draw();
}
interface Circle extends Shape {
    radius: number;
}

function drawShapes1<S extends Shape>(shapes: S[]) {
    shapes.forEach(s => s.draw());
}

function drawShapes2(shapes: Shape[]) {

    shapes.forEach(s => s.draw());
}
