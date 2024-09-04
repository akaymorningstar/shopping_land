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
  finalAmount = 0;
  cartProductQuantity: number = 1;
  noResults:boolean = true;

  constructor(private productDetailsService: ProductDetailsService){}

  ngOnInit(): void {
    this.getMyCartData();
  }

  getMyCartData(){
    this.productDetailsService.fetchMyCartData().subscribe((res:any) => {
      if(res.length>0){
        this.noResults = false;
        this.myCartProducts = res;
        this.finalAmount = this.getFinalAmount();
        console.log("Have data : ");
      } else {
        this.noResults = true;
        console.log("No data...");
      }
    })
  }

  getFinalAmount(): number{
    let totalAmount = 0;
    console.log("Products for total : ",this.myCartProducts);
    
    this.myCartProducts.forEach((product: any) => {
      let numericAmount = Number(product.product_total_amount)
      totalAmount += numericAmount;
    });
    return totalAmount;
  }

  increaseQuantity(index:any, product:any) {
    //To update quantity
    var increaseClickedItemQuantity = document.getElementById(index+'_quantity') as HTMLInputElement;
    let quantity:any = increaseClickedItemQuantity?.value;
    quantity = Number(quantity);
    quantity++;
    increaseClickedItemQuantity.value = quantity;

    //TO update total price
    let productPriceNumber: number = parseFloat(product.product_price.replace('$', ''));
    console.log("total amount: ",productPriceNumber);
    const updatedTotalAmount = product.product_total_amount + productPriceNumber;
    this.myCartProducts[index].product_total_amount = updatedTotalAmount;

    //To update quantity in DB
    this.addToCart(1,product);
  }

  decreaseQuantity(index:any, product:any) {
    //To update quantity
    var increaseClickedItemQuantity = document.getElementById(index+'_quantity') as HTMLInputElement;
    let quantity:any = increaseClickedItemQuantity?.value;
    quantity = Number(quantity);
    if (quantity > 1) {
      quantity--;
      increaseClickedItemQuantity.value = quantity;

      //TO update total price
    let productPriceNumber: number = parseFloat(product.product_price.replace('$', ''));
    console.log("total amount: ",productPriceNumber);
    const updatedTotalAmount = product.product_total_amount - productPriceNumber;
    this.myCartProducts[index].product_total_amount = updatedTotalAmount;

    //To update quantity in DB
    this.addToCart(-1,product);
    }
  }

  
  addToCart(quantity:any,product:any){
    console.log("Item updated quantity : ",quantity);
    const data = {
                  id:product.id,
                  product_name:product.product_name,
                  product_img:product.product_img,
                  product_price:product.product_price,
                  product_quantity:quantity
                }
    this.productDetailsService.addToCart(data).subscribe({
      next: (response) => {
        console.log('My-Cart Response: ', response);
        this.finalAmount = this.getFinalAmount();
      },
      error: (error) => {
        console.error('My-Cart Error: ', error);
      }
    });
  }
}
