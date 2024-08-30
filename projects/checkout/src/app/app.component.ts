import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsService } from '../../../portal-container/src/services/product-details.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'checkout';
  checkoutForm: FormGroup;
  orderStatus:boolean = false;
  orderRes:any;

  constructor(private fb: FormBuilder, private productDetailsService:ProductDetailsService) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      // Logic to send data to backend
      console.log('Order placed:', this.checkoutForm.value);
      this.productDetailsService.checkoutOrder(this.checkoutForm.value).subscribe(res => {
        this.orderRes = res;
        this.orderStatus = true;
      }, error => {
        console.error('Error:', error);
      })
    }
  }

  closeCheckoutPopup(){

  }
}
