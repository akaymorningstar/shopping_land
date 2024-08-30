import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailsService } from '../../../portal-container/src/services/product-details.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'product-details';
  product:any;
  currentImageIndex: number = 0;
  // productId: number;
  // itemId: number;
  itemId: number | null = null;


  constructor(private productDetailsService: ProductDetailsService,private route: ActivatedRoute) {}

  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemId = params['itemId'];
    });
    this.loadProductDetails(this.itemId);
  }

  showImage(index: number): void {
    this.currentImageIndex = index;
  }

  loadProductDetails(id:any){
    this.productDetailsService.getProductDetails(id).subscribe((res:any) => {
      this.product = res;
    })
  }

  addToCart(quantity=1){
    const data = {
                  id:this.product.id,
                  product_name:this.product.product_name,
                  product_img:this.product.product_img,
                  product_price:this.product.product_price,
                  product_quantity:quantity
                }
    this.productDetailsService.addToCart(data).subscribe({
      next: (response) => {
        console.log('My-Cart Response: ', response);
        alert("Product added in cart successfully.")
      },
      error: (error) => {
        console.error('My-Cart Error: ', error);
      }
    });
  }
}
