import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Order } from '../models/order';
import { PointOfSellComponent } from '../point-of-sell/point-of-sell.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { OrderServiceService } from '../service/order-service.service';
import { DeliveryComponent } from "../delivery/delivery.component";


@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PointOfSellComponent, KitchenComponent, DeliveryComponent],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnChanges{
    orders: Order[] = [];
    constructor(private service: OrderServiceService) {}

    addOrder() {
        this.orders = this.service.traerOrders();
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log(this.orders);
      
    }
}
