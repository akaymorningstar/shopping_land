import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  baseUrl = "http://localhost:4800/api/";

  constructor(private http : HttpClient) {}

  getProductDetails(id:any){
    return this.http.get(this.baseUrl + `product-data/${id}`);
  }

  addToCart(product:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + `cart/product`, product)
  }

  fetchMyCartData(){
    return this.http.get(this.baseUrl + `cart/products`)
  }

  checkoutOrder(paymentData:any){
    return this.http.post(this.baseUrl + `cart/place-order`, paymentData)
  }
}
