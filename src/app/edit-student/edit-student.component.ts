import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student:Student = new Student();

  constructor(private studentService:StudentService, private router:Router, private actiavtedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    //get the id from the url
    const id = this.actiavtedRoute.snapshot.params[`id`];
    this.studentService.getStudentById(id).subscribe(
      (data)=>{
        this.student  = data;
      },
      error => console.log(error)
    );

  }

  submitEditButton(){
    this.studentService.addNewStudent(this.student).subscribe(
      (response)=>{
        this.router.navigate(['list-students']);
      },
      error => console.log(error)
    )
  }

}
