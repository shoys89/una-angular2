import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    private students:Object[];

    constructor() { 
        this.students = [{name:"Beta Ray Bill"},{name:"Thor"},{name:"Loki"}];
    }

    getStudents(){
        return this.students;
    }

}