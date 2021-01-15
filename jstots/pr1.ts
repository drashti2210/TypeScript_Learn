class Car {
    name:string;
    year:number;
    constructor(name:string, year:number) {
        this.name = name;
        this.year = year;
    }
}

let myCar:Car = new Car("Ford", 2014);
console.log(`Name : ${myCar.name} Year of release : ${myCar.year}`);