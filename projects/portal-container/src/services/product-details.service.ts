import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  baseUrl = "http://localhost:4800/api/product-data";

  constructor(private http : HttpClient) {}

  getProductDetails(id:any){
    return this.http.get(this.baseUrl + `/${id}`);
  }
}
