import { Injectable, signal } from '@angular/core';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffeesData: Coffee[] = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and intense coffee with rich flavor',
      price: 3.50,
      image: '/assets/espresso.jpg'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: 4.50,
      image: '/assets/cappuccino.jpg'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Espresso with a lot of steamed milk',
      price: 4.00,
      image: '/assets/latte.jpg'
    },
    {
      id: 4,
      name: 'Americano',
      description: 'Espresso diluted with hot water',
      price: 3.00,
      image: '/assets/americano.jpg'
    },
    {
      id: 5,
      name: 'Mocha',
      description: 'Espresso with chocolate and steamed milk',
      price: 5.00,
      image: '/assets/mocha.jpg'
    },
    {
      id: 6,
      name: 'Macchiato',
      description: 'Espresso with a small amount of foamed milk',
      price: 3.75,
      image: '/assets/macchiato.jpg'
    },
    {
      id: 7,
      name: 'Frappe',
      description: 'A chilled, frothy coffee drink made with instant coffee, milk, sugar, and ice',
      price: 6.00,
      image: '/assets/frappe.jpg'
    },
    {
      id: 8,
      name: 'Irish Coffee',
      description: 'A warming cocktail of hot coffee and Irish whiskey',
      price: 5.50,
      image: '/assets/irish.jpg'
    }
  ];

  coffees = signal<Coffee[]>(this.coffeesData);

  selectedCoffee = signal<Coffee | null>(null);

  constructor() { }

  getAllCoffees(): Coffee[] {
    return this.coffees();
  }

  searchCoffees(term: string): void {
    if (!term || term.trim() === '') {
      this.coffees.set(this.coffeesData);
    }
    else {
      const filteredCoffees = this.coffeesData.filter(coffee =>
        coffee.name.toLowerCase().includes(term.toLowerCase())
      );
      this.coffees.set(filteredCoffees);
    }
  }

  setSelectedCoffee(coffee: Coffee): void {
    this.selectedCoffee.set(coffee);
  }

}
