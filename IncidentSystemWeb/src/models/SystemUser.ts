import { Employee } from "./Employee";

export class SystemUser{
    login:string;
    password:string;
    employee:Employee;

    constructor(login:string, password:string, employee:Employee)
    {
        this.login = login; 
        this.password = password; 
        this.employee = employee; 
    }
}