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
function printVal(InfObj) {
    console.log(InfObj.I1);
}
var myObj = { I1: "Size 10 Object" };
printVal(myObj);
function createSquare(sqrt) {
    var newSquare = { height: 1, width: 1, area: 1 };
    if (sqrt.height) {
        newSquare.height = sqrt.height;
    }
    if (sqrt.width) {
        newSquare.area = sqrt.height * sqrt.width;
    }
    return newSquare.area;
}
var myArea = createSquare({ height: 5, width: 5 });
console.log("Area is " + myArea);
var pnt = { x: 1, y: 1 };
console.log("x is " + pnt.x + " y is " + pnt.y);
function funct(src, sub) {
    var result = src.search(sub);
    return result > -1;
}
var ans = funct("Hello World", "Hell");
console.log("ans is " + ans);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var sqr = {};
sqr.color = "blue";
sqr.Length = 10;
sqr.Width = 10;
console.log("sqr color is " + sqr.color + " length " + sqr.Length + " and width " + sqr.Width);
// extending multiple classes
var Panel = /** @class */ (function () {
    function Panel(width, height) {
        this.width = width;
        this.height = height;
    }
    return Panel;
}());
var Frame = /** @class */ (function () {
    function Frame(modal) {
        this.modal = modal;
    }
    return Frame;
}());
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Box;
}(Panel));
var box = new Box(10, 20);
box.modal = true;
console.log(box);
// Classes
var DemoEmployee = /** @class */ (function () {
    function DemoEmployee(Id, name) {
        this.empName = name;
        this.empId = Id;
    }
    DemoEmployee.prototype.getSalary = function () {
        return 10000;
    };
    return DemoEmployee;
}());
var emp = new DemoEmployee(1, "Drashti");
// Inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(empId, name) {
        var _this = _super.call(this, name) || this;
        _this.empId = empId;
        return _this;
    }
    Employee1.prototype.displayName = function () {
        console.log("Name is  " + this.name + " Employee Id is  " + this.empId);
    };
    return Employee1;
}(Person));
var emp1 = new Employee1(10, "ABC");
emp1.displayName();
// With data modifier
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empId = code;
    }
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.department = department;
        return _this;
    }
    return SalesEmployee;
}(Employee));
var empl = new SalesEmployee("John Smith", 123, "Sales");
console.log("Employee: " + empl.empName);
//empObj.empId; //ERROR
//Over Loading
var Creatures = /** @class */ (function () {
    function Creatures() {
    }
    Creatures.prototype.livesOn = function () {
        console.log("Lives on Earth");
    };
    return Creatures;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name, live) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.live = live;
        return _this;
    }
    Animal.prototype.display = function () {
        console.log("Name of animal " + this.name);
    };
    Animal.prototype.livesOn = function () {
        console.log(this.name + " is of type " + this.live);
    };
    return Animal;
}(Creatures));
var a1 = new Animal("Lion", "Wild");
a1.display();
a1.livesOn();
var a2 = new Animal("Cow", "Domestic");
a2.display();
a2.livesOn();
var kv1 = { key: 1, value: "asd" };
var kv2 = { key: 2, value: 12345 };
console.log("kv1: key " + kv1.key + " value: " + kv1.value);
console.log("kv2: key " + kv2.key + " value: " + kv2.value);
// Generic Class
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    Student.prototype.display = function () {
        console.log("Id = " + this.Id + ", Name = " + this.Name);
    };
    return Student;
}());
var st = new Student();
st.setValue(101, "Akash");
st.display();
var std = new Student();
std.setValue("201", "Amar");
std.display();
;
var KeyVal = /** @class */ (function () {
    function KeyVal() {
    }
    KeyVal.prototype.disp = function (key, val) {
        console.log("Key = " + key + ", val = " + val);
    };
    return KeyVal;
}());
var kv3 = new KeyVal();
kv3.disp(1, 'Hello');
;
;
;
;
