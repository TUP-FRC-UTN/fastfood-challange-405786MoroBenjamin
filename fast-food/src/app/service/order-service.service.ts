import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor() { }

  orders: Order[] = [];

  ingresarOrder(order: Order)
  {
    this.orders.push(order);
  }

  traerOrders(){
    return this.orders;
  }

  cambiarEstadoOrder(orderNumber: number, newStatus: 'pending' | 'cooking' | 'ready' | 'delivered') {
    const order = this.orders.find(o => o.number === orderNumber);
    if (order) {
      order.status = newStatus;
    }
  }

  filtrarOrdersPorEstado(status: 'pending' | 'cooking' | 'ready' | 'delivered'): Order[] {
    return this.orders.filter(order => order.status === status);
  }
}
