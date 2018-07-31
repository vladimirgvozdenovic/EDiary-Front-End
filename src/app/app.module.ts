import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student-components/student/student.component';
import { StudentListComponent } from './components/student-components/student-list/student-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { TeacherHomeComponent } from './components/teacher-components/teacher-home/teacher-home.component';
import { TeacherComponent } from './components/teacher-components/teacher/teacher.component';
import { TeacherListComponent } from './components/teacher-components/teacher-list/teacher-list.component';
import { StudentDetailsComponent } from './components/student-components/student-details/student-details.component';
import { TtstsctStudentComponent } from './components/teacherTeachSubjectToSchoolClassToStudent-components/ttstsct-student/ttstsct-student.component';
import { TtstsctStudentListComponent } from './components/teacherTeachSubjectToSchoolClassToStudent-components/ttstsct-student-list/ttstsct-student-list.component';
import { TtstsctStudentDetailsComponent } from './components/teacherTeachSubjectToSchoolClassToStudent-components/ttstsct-student-details/ttstsct-student-details.component';
import { StudentHomeComponent } from './components/student-components/student-home/student-home.component';
import { ParentHomeComponent } from './components/parent-components/parent-home/parent-home.component';
import { AdminHomeComponent } from './components/admin-components/admin-home/admin-home.component';
import { StudentAddComponent } from './components/student-components/student-add/student-add.component';
import { StudentUpdateComponent } from './components/student-components/student-update/student-update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    LoginComponent,
    TeacherHomeComponent,
    TeacherComponent,
    TeacherListComponent,
    StudentDetailsComponent,
    TtstsctStudentComponent,
    TtstsctStudentListComponent,
    TtstsctStudentDetailsComponent,
    StudentHomeComponent,
    ParentHomeComponent,
    AdminHomeComponent,
    StudentAddComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
