import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from './order-detail';

@Component({
  selector: 'ngx-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class OrdersDetailComponent implements OnInit {

  orderDetails: Array<OrderDetail> =[];
  constructor(private _orderDetailService: OrderDetailService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this._orderDetailService.getAllOrderDetail().subscribe((data: any) => {
      this.orderDetails = data.result;
      console.log(data);
    })
  }
}
