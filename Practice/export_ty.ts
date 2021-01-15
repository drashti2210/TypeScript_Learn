export let age : number = 20;
export class Employee {
    empId: number;
    empName: string;
    constructor(name: string, Id: number) {
        this.empName = name;
        this.empId = Id;
    }
    displayEmployee() {
        console.log (`Employee Code: ${this.empId} , Employee Name: ${this.empName}` );
    }
}
