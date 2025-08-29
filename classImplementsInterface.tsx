interface Employee{
    id:number;
    name:string;
    age:number;
    isLegal():boolean;

}

class Manager implements Employee{
    id: number;
    name: string;
    age: number;

    constructor(id:number,name:string,age:number){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    isLegal(): boolean {
        return this.age>=18;
    }
}

let emp=new Manager(1,"John",25);
console.log(`Employee ${emp.name} is legal: ${emp.isLegal()}`);
