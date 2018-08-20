import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../../../service/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  order: Order;
  constructor(private orderService:OrderService, private _router: Router) { }

  ngOnInit() {
    this.order = this.orderService.getter();
  }

}
