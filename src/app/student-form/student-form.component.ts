import { Component, OnInit } from '@angular/core';
import { Studentform } from '../studentclass';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  estudiantes: Studentform [] = [];


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
        .subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  model = new Studentform(18, 'Dr IQ', 'ChuckOverstreet@gmail.com');

  newStudent() {
    this.model = new Studentform(42, '', '');
  }


}
