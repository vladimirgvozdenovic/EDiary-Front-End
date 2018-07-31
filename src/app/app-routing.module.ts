import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-components/student-list/student-list.component';
import { StudentComponent } from './components/student-components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherListComponent } from './components/teacher-components/teacher-list/teacher-list.component';
import { TeacherComponent } from './components/teacher-components/teacher/teacher.component';
import { TeacherHomeComponent } from './components/teacher-components/teacher-home/teacher-home.component';
import { StudentHomeComponent } from './components/student-components/student-home/student-home.component';
import { ParentHomeComponent } from './components/parent-components/parent-home/parent-home.component';
import { AdminHomeComponent } from './components/admin-components/admin-home/admin-home.component';
import { StudentDetailsComponent } from './components/student-components/student-details/student-details.component';
import { TtstsctStudentComponent } from './components/teacherTeachSubjectToSchoolClassToStudent-components/ttstsct-student/ttstsct-student.component';
import { TtstsctStudentListComponent } from './components/teacherTeachSubjectToSchoolClassToStudent-components/ttstsct-student-list/ttstsct-student-list.component';
import { TtstsctStudentDetailsComponent } from './components/teacherTeachSubjectToSchoolClassToStudent-components/ttstsct-student-details/ttstsct-student-details.component';
import { StudentAddComponent } from './components/student-components/student-add/student-add.component';
import { StudentUpdateComponent } from './components/student-components/student-update/student-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'students', component: StudentListComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'teacher-home', component: TeacherHomeComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'ttstsct-students', component: TtstsctStudentListComponent },
  { path: 'ttstsct-student', component: TtstsctStudentComponent },
  { path: 'ttstsct-student-details/:id', component: TtstsctStudentDetailsComponent },
  { path: 'student-home', component: StudentHomeComponent },
  { path: 'parent-home', component: ParentHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'student-add', component: StudentAddComponent },
  { path: 'student-update/:id', component: StudentUpdateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
