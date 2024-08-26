import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  details: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 100, details: 'Detailed information about Product 1.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 150, details: 'Detailed information about Product 2.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 250, details: 'Detailed information about Product 3.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', description: 'Description for Product 4', price: 350, details: 'Detailed information about Product 4.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', description: 'Description for Product 5', price: 450, details: 'Detailed information about Product 5.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', description: 'Description for Product 6', price: 550, details: 'Detailed information about Product 6.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', description: 'Description for Product 7', price: 650, details: 'Detailed information about Product 7.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', description: 'Description for Product 8', price: 750, details: 'Detailed information about Product 8.', imageUrl: 'https://via.placeholder.com/150' },
    // Add more products here
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
