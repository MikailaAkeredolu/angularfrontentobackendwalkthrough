import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';

const routes: Routes = [

  {path:'list-students', component: ListStudentsComponent},
  {path:'add-student', component: AddStudentComponent},
  {path:'edit-student/:id', component: EditStudentComponent},
  {path:'', component: ListStudentsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
