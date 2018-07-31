import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { AppComponent } from '../../app.component';
import { TeacherHomeComponent } from '../../components/teacher-components/teacher-home/teacher-home.component';
import { TeacherService } from '../../services/teacher.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  private appComponent: AppComponent;
  /*private teacherHomeComponent: TeacherHomeComponent;*/

  constructor(private router: Router, private authenticationService: AuthService/*, private teacherService: TeacherService*/) {
    // this.teacherHomeComponent = new TeacherHomeComponent(authenticationService, teacherService);
  }

  ngOnInit() {
    this.user = this.authenticationService.user;
    // this.authenticationService.logout();
  }

  login(username, password) {
    this.authenticationService.login(username, password).subscribe(user => {
      this.user = user;
      console.log(user);
      console.log('from login.component.ts');
      if (user.role === 'admins') {

        this.router.navigate(['/admin-home']);

      } else if (user.role === 'parents') {

        this.router.navigate(['/parent-home']);

      } else if (user.role === 'students') {

        this.router.navigate(['/student-home']);

      } else if (user.role === 'teachers') {

        this.router.navigate(['/teacher-home']);

      }
    });
  }

logout() {
  this.authenticationService.logout();
  this.user = this.authenticationService.user;
}

/*get(): Observable<User> {
    return of(this.user);
}*/

}
