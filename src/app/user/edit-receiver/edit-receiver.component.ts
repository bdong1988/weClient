import { Component, OnInit } from '@angular/core';
import { OrderReceiver } from '../../shared/orderReceiver';
import { UserProfileService } from '../../core/user-profile.service';

@Component({
  selector: 'app-edit-receiver',
  templateUrl: './edit-receiver.component.html',
  styleUrls: ['./edit-receiver.component.scss']
})
export class EditReceiverComponent implements OnInit {
  receiver: OrderReceiver;
  constructor(private userProfileService: UserProfileService) { 
    this.receiver = this.userProfileService.getEditReceiver();
  }

  ngOnInit() {
  }

  onClickSave(): void {
    this.userProfileService.saveEditReceiver();
  }

}
