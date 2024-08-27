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
}
