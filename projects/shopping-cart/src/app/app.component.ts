import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductDetailsService } from '../../../portal-container/src/services/product-details.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'shopping-cart';
  myCartProducts:any;
  totalAmount = 0;

  constructor(private productDetailsService: ProductDetailsService){}

  ngOnInit(): void {
    this.getMyCartData()
  }

  getMyCartData(){
    this.productDetailsService.fetchMyCartData().subscribe((res:any) => {
      this.myCartProducts = res;
    })
  }


}
