import { Component, OnInit } from '@angular/core';
import { RouterOutlet , RouterLink, Router } from '@angular/router';
import { ProductService, Product } from './services/product.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  expandedProductId: number | null = null;  // Track the currently expanded product

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  navigation(tabPath:string,itemId: number){
    console.log("clicked tab : ", tabPath);
    this.router.navigate([tabPath, { itemId }]);
  }

}
