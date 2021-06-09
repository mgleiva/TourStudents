import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../students/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  // @Input() student?: Student;
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location) { }

  ngOnInit(): void {
    this.getStudent();
  }

  goBack(): void {
    this.location.back();
  }

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  save(): void {
    if (this.student) {
      this.studentService.updateStudent(this.student)
        .subscribe(() => this.goBack());
    }
  }

}
