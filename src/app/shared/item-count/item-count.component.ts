import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent implements OnInit {
  @Input() count = 0;
  constructor() { }

  ngOnInit() {
  }

  onAddClick(): void {
    this.count += 1;
  }

  onMinusClick(): void {
    if (this.count <= 0) {
      return;
    }
    this.count -= 1;
  }

}
