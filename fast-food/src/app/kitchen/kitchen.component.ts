import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Order } from '../models/order';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
    @Input() orders: Order[] = [];

    constructor(private service: OrderServiceService) {}

    changeStatus(order: Order) {
        order.status = 'cooking';
    }

    inCooking() {
      let OrdersCooking: Order[] = this.service.filtrarOrdersPorEstado('cooking');
      if(OrdersCooking.length > 0){
        return true;
      }else{
        return false;
      }
    }

    endCook(order: Order) {
      this.service.cambiarEstadoOrder(order.number, 'ready');
    }

}
