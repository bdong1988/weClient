import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { UserDetails } from './user-details.model';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operator/map';

@Injectable()
export class AuthenticationService {
  readonly authticationUrl: string = '/mobile/api/login';
  private _isAuthenticated: boolean = false;
  private _userDetail: UserDetails;
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<UserDetails> {
    return this.http.post<UserDetails>(this.authticationUrl, {
      'username': username,
      'password': password
    })
    .map( data => this.getUserDetail(data));
  }
  getUserDetail(data: any): UserDetails {
    this._userDetail = new UserDetails();
    this._userDetail.name = data.data[0].UserName;
    this._userDetail.userType = data.data[0].UserTypeID;
    return this._userDetail;
  }
}
