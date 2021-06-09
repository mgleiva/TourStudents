import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  estudiantes: Student [] = [];

  constructor(private studentService: StudentService) {   }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
        .subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  add(name: string, email: string): void {
    name = name.trim();
    email = email.trim();
    if (!name) { return; }
    this.studentService.addStudent({ name, email } as Student)
      .subscribe(student => {
        this.estudiantes.push(student);
      });
  }

  delete(student: Student): void {
    this.estudiantes = this.estudiantes.filter(s => s !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

}
