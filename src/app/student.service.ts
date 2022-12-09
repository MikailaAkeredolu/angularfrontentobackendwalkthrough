import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient ) { }

  //get all students from the backend
  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`http://localhost:8080/students`);
  }

  addNewStudent(student:Student):Observable<Student>{
      return this.http.post<Student>(`http://localhost:8080/students`, student);
  }

  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`http://localhost:8080/students/${id}`);
  }


}
