import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public baseApiURL = "http://localhost:4800/api/product-data";

  constructor(private httpClient: HttpClient){}

  getProductsList(){
    return this.httpClient.get(this.baseApiURL);
  }

}
