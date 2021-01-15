//Interfaces
interface Inf1 {
    I1: string;
}
function printVal(InfObj: Inf1) {
    console.log(InfObj.I1);
}
let myObj = { I1: "Size 10 Object" };
printVal(myObj);

interface Square {
    height?: number;
    width?: number;
    area?: number;
}
function createSquare(sqrt: Square): number {
    let newSquare: Square = { height: 1, width: 1, area: 1 };
    if (sqrt.height) {
        newSquare.height = sqrt.height;
    }
    if (sqrt.width) {
        newSquare.area = sqrt.height * sqrt.width;
    }
    return newSquare.area;
}
let myArea = createSquare({ height: 5, width: 5 });
console.log(`Area is ${myArea}`);

// readonly
interface Point {
    readonly x: number;
    readonly y: number;
}
let pnt: Point = { x: 1, y: 1 };
console.log(`x is ${pnt.x} y is ${pnt.y}`);
// pnt.x = 10 //ERROR

// Using in function
interface SearchFunc {
    (src: string, sub: string): boolean;
}
function funct(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
let ans = funct("Hello World", "Hell");
console.log(`ans is ${ans}`);

// implementing in class
interface ClockInt {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInt {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// extending interfaces
interface Shape {
    color: string;
}

interface Stroke {
    Width: number;
}
interface SquareType extends Shape, Stroke {
    Length: number;
}
let sqr = {} as SquareType;
sqr.color = "blue";
sqr.Length = 10;
sqr.Width = 10;
console.log(`sqr color is ${sqr.color} length ${sqr.Length} and width ${sqr.Width}`);

// extending multiple classes
class Panel {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}
class Frame {
    modal: boolean;
    constructor(modal: boolean) {
        this.modal = modal;
    }
}
interface Widget extends Panel, Frame {
    x: number;
    y: number;
}
class Box extends Panel implements Widget {
    modal: boolean;
    x: number;
    y: number;
}
let box: Box = new Box(10, 20);
box.modal = true;
console.log(box);

// Classes
class DemoEmployee {
    empId: number;
    empName: string;

    constructor(Id: number, name: string) {
        this.empName = name;
        this.empId = Id;
    }

    getSalary(): number {
        return 10000;
    }
}
let emp = new DemoEmployee(1, "Drashti");

// Inheritance
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Employee1 extends Person {
    empId: number;

    constructor(empId: number, name: string) {
        super(name);
        this.empId = empId;
    }
    displayName(): void {
        console.log(`Name is  ${this.name} Employee Id is  ${this.empId}`);
    }
}
let emp1 = new Employee1(10, "ABC");
emp1.displayName();

// With data modifier
class Employee {
    public empName: string;
    protected empId: number;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empId = code;
    }
}
class SalesEmployee extends Employee {
    private department: string;
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}
let empl = new SalesEmployee("John Smith", 123, "Sales");

console.log(`Employee: ${empl.empName}`);
//empObj.empId; //ERROR

//Over Loading
class Creatures {
    name: String;
    livesOn(): void {
        console.log("Lives on Earth");
    }
}
class Animal extends Creatures {
    live: String;
    constructor(name: String, live: String) {
        super();
        this.name = name;
        this.live = live;
    }
    display() {
        console.log(`Name of animal ${this.name}`);
    }
    livesOn(): void {
        console.log(`${this.name} is of type ${this.live}`);
    }
}
let a1 = new Animal("Lion", "Wild");
a1.display();
a1.livesOn();
let a2 = new Animal("Cow", "Domestic");
a2.display();
a2.livesOn();

// Generic interface
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kv1: KeyPair<number, string> = { key: 1, value: "asd" };
let kv2: KeyPair<number, number> = { key: 2, value: 12345 };
console.log(`kv1: key ${kv1.key} value: ${kv1.value}`);
console.log(`kv2: key ${kv2.key} value: ${kv2.value}`);

// Generic Class
class Student<T, U>
{
    Id: T;
    Name: U;
    setValue(id: T, name: U): void {
        this.Id = id;
        this.Name = name;
    }
    display(): void {
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);
    }
}
let st = new Student<number, string>();
st.setValue(101, "Akash");
st.display();
let std = new Student<string, string>();
std.setValue("201", "Amar");
std.display();

// Generic Class & Interface
interface IKeyValue<T, U> {
    disp(key: T, val: U): void;
};

class KeyVal<T, U> implements IKeyValue<T, U>
{
    disp(key: T, val: U): void {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let kv3: IKeyValue<number, string> = new KeyVal();
kv3.disp(1, 'Hello');

// Declaration Merging
interface Animal { };
interface Sheep { };
interface Dog { };
interface Cat { };
interface Class1 {
    eat(animal: "Animal"): Animal;
}
interface Class1 {
    eat(animal: Sheep): Sheep;
}
interface Class1 {
    eat(animal: Dog): Dog;
    eat(animal: Cat): Cat;
}
interface Class1 {
    eat(animal: 'Animal'): Animal;
    eat(animal: Dog): Dog;
    eat(animal: Cat): Cat;
    eat(animal: Sheep): Sheep;
}

