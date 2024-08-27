import { Component, OnInit } from '@angular/core';
import { RouterOutlet , RouterLink, Router } from '@angular/router';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // products: Product[] = [];
  products:any;
  expandedProductId: number | null = null;  // Track the currently expanded product

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.getProductListItems();
  }


  getProductListItems(){
    this.productService.getProductsList().subscribe((res:any) => {
      this.products = res;
      console.log("List Items Response: ",this.products);
    })
  }

  navigation(tabPath:string,itemId: number){
    console.log("clicked tab : ", tabPath);
    this.router.navigate([tabPath], { queryParams: {itemId} });
  }

}
