import { Component, OnInit } from '@angular/core';

interface NavLink {
  path: string;
  displayText: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  readonly navLinks: Array<NavLink> = [
    {path: '/user/orders', displayText: '订单列表'},
    {path: '/user/receivers', displayText: '收货人信息'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
