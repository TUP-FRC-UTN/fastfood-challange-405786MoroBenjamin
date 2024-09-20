import { Component, Input } from '@angular/core';
import { OrderServiceService } from '../service/order-service.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  constructor(private service: OrderServiceService) {}

  @Input() orders: Order[] = [];

  enviarPedido(order: Order) {
    this.service.cambiarEstadoOrder(order.number, 'delivered');
  }
}
