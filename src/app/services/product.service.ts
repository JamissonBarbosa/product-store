import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/productData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httClient = inject(HttpClient)

  getAllProducts() {
    return this.httClient.get<Product[]>('api/products')

  }
}
