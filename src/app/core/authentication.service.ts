import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { UserDetails } from './user-details.model';

@Injectable()
export class AuthenticationService {
  readonly authticationUrl: string = '/mobile/api/login';
  private _isAuthenticated: boolean = false;
  private _userDetail: UserDetails;
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<UserDetails> {
    this.http.post(this.authticationUrl, {
      'username': username,
      'password': password
    }).map(data => {
    });
  }
}
