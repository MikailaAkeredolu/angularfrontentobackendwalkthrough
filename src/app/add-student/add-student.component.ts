import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student = new Student();

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
  }


  addStudent(){
  this.studentService.addNewStudent(this.student).subscribe(
    ()=>this.router.navigate(['list-students'])
    
  )

  }

}
