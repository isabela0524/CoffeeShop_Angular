import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../coffee.model';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.css']
})
export class CoffeeCardComponent {
  @Input() coffee!: Coffee;
  @Output() orderCoffee = new EventEmitter<Coffee>();

  onOrderNow(): void {
    this.orderCoffee.emit(this.coffee);
  }

  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
