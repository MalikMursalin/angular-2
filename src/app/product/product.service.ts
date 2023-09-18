// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${this.apiUrl}`);
  }

  getProductById(productId: number) {
    return this.http.get(`${this.apiUrl}/${productId}`);
  }

  createProduct(productData: any) {
    return this.http.post(`${this.apiUrl}`, productData);
  }

}
