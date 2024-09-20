import { Component, EventEmitter, NgModule, Output, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {
  @Output() orderEmit = new EventEmitter<void>();
  constructor(private service: OrderServiceService) {}

  orders2 : Order[] = [];

  actualizarList(){
    this.orders2 = this.service.traerOrders();
  }

  order: Order = {
    number: Math.floor(Math.random() * 1000) + 1,
    name: '',
    description: '',
    date: new Date()
  };

  submitOrder() {
    this.order.status = 'pending';
    this.service.ingresarOrder(this.order);
    this.orderEmit.emit();
    this.order = {
      number: Math.floor(Math.random() * 1000) + 1,
      name: '',
      description: '',
      date: new Date()
    };
  }
}


