import { Component } from '@angular/core';
import { StudentService} from './student.service'

@Component({
    providers:[StudentService],
    selector: 'my-app',
    template: `<h1>Welcome to Angular2 {{firstname}}</h1>
    <h2>And folks</h2>
    <ul>
    <li (click)=selectStudent(student) *ngFor="let student of students">{{student.name}}</li>
    </ul>
    <input [(ngModel)]="current.name"><button (click)="addStudent(current.name)">Add</button>
    `
})
export class AppComponent{
 private firstname:string = "Maverick";
 private students:Object[] = [{name:"Juan"},{name:"Pedro"}];
 public current = {name:""};

constructor(service:StudentService){
    this.students = service.getStudents();
}

 selectStudent(student:any){
     this.current = student;
 }

 addStudent(name:string){
     this.students.push({name:name});
 }
}