import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: User;
  title = 'Marko Kraljević';
  time: Date = new Date();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.user;
  }
}
