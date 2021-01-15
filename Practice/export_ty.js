"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.age = void 0;
exports.age = 20;
var Employee = /** @class */ (function () {
    function Employee(name, Id) {
        this.empName = name;
        this.empId = Id;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empId + " , Employee Name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
