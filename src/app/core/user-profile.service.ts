import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { delay } from 'rxjs/operators/delay';
import { timeout } from 'rxjs/operator/timeout';
import 'rxjs/add/operator/map';

import { OrderReceiver } from '../shared/orderReceiver';

@Injectable()
export class UserProfileService {
  receivers: OrderReceiver[];
  editReceiver: OrderReceiver;
  constructor(private http: HttpClient) { }

  getReceivers(page: number, pageSize: number): Observable<OrderReceiver[]> {
    const mockUrl = '/assets/mocks/receivers.json';
    return this.http.get<OrderReceiver[]>(mockUrl)
      .pipe(
        tap(data => this.receivers = data),
        delay(5000)
      );
  }

  setEditReceiver(rec: OrderReceiver): void {
    this.editReceiver = rec;
  }
  getEditReceiver(): OrderReceiver {
    return this.editReceiver;
  }
  saveEditReceiver(): void {
    
  }

}
