import { Component, OnInit } from '@angular/core';
import { OrderReceiver } from '../../shared/orderReceiver';
import { UserProfileService } from '../../core/user-profile.service';

@Component({
  selector: 'app-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.scss']
})
export class ReceiversComponent implements OnInit {
  receivers: OrderReceiver[];
  bLoading: boolean;
  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.getAllReceivers();
  }

  getAllReceivers(): void {
    this.bLoading = true;
    this.userProfileService.getReceivers(1, -1)
      .subscribe(
        data => {
          this.receivers = data;
          this.bLoading = false;
        },
        err => {
          this.bLoading = false;
        }
      );
  }

  onClickReceiver(index: number): void {

  }

}
