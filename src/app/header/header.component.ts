import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Coffee } from '../coffee.model';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedCoffee: any;
  searchTerm = '';

  constructor(private coffeeService: CoffeeService) {
    this.selectedCoffee = this.coffeeService.selectedCoffee;
  }

  onSearch(): void {
    this.coffeeService.searchCoffees(this.searchTerm);
  }

}
