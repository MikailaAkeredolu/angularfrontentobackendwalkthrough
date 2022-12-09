import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students?:Student[];

  constructor(private studentService:StudentService, private router:Router) { }

 //Lifecycle method
  ngOnInit(): void {
   this.fetchAllStudents();
  }


  fetchAllStudents(){
     this.studentService.getAllStudents().subscribe(
        (response)=>{
              this.students = response;
              //console.log(this.students);
        }

     );
  }

  addStudentButton(){
      this.router.navigate(['add-student']);
  }

  editStudentButton(id:number){
    this.router.navigate(['edit-student', id]);
}




}
