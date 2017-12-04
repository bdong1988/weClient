import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  hasError: boolean;
  constructor( private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onClickCancel(): void {

  }

  onClickLogIn(): void {
    this.auth.login(this.username, this.password)
  }

}
