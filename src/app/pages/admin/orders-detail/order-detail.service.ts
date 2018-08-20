import { Injectable } from "../../../../../node_modules/@angular/core";
import { HttpClient } from "../../../../../node_modules/@angular/common/http";
import { OrderDetail } from "./order-detail";
import { map } from "../../../../../node_modules/rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {
    private baseUrl: string = 'http://localhost:8080/pages/order-detail';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private _httpClient: HttpClient) { }

    getAllOrderDetail() {
        return this._httpClient.get<OrderDetail>(this.baseUrl + '/all').pipe(
            map(data => data))
    }
    deleteUser(orderDetail: OrderDetail) {
        return this._httpClient.delete(this.baseUrl + '/delete/' + orderDetail.id);
    }
}