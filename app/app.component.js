"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var student_service_1 = require('./student.service');
var AppComponent = (function () {
    function AppComponent(service) {
        this.firstname = "Maverick";
        this.students = [{ name: "Juan" }, { name: "Pedro" }];
        this.current = { name: "" };
        this.students = service.getStudents();
    }
    AppComponent.prototype.selectStudent = function (student) {
        this.current = student;
    };
    AppComponent.prototype.addStudent = function (name) {
        this.students.push({ name: name });
    };
    AppComponent = __decorate([
        core_1.Component({
            providers: [student_service_1.StudentService],
            selector: 'my-app',
            template: "<h1>Welcome to Angular2 {{firstname}}</h1>\n    <h2>And folks</h2>\n    <ul>\n    <li (click)=selectStudent(student) *ngFor=\"let student of students\">{{student.name}}</li>\n    </ul>\n    <input [(ngModel)]=\"current.name\"><button (click)=\"addStudent(current.name)\">Add</button>\n    "
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map