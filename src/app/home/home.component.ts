import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CoffeeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  coffeeService = inject(CoffeeService);
  @ViewChild('header') headerComponent!: HeaderComponent;

  onOrderCoffee(coffee: Coffee): void {
    this.coffeeService.setSelectedCoffee(coffee);
  }

  scrollToMenu(): void {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
