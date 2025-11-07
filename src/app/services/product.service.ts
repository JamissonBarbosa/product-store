import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/productData';
import { ProductPayloadData } from '../model/payloadData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httClient = inject(HttpClient)

  getAllProducts() {
    return this.httClient.get<Product[]>('api/products')
  }

  postProducts(payload: ProductPayloadData) {
    return this.httClient.post('api/products', payload)
  }

  getProductByID(id: string) {
    return this.httClient.get<Product>(`api/products/${id}`)
  }

  putProducts(id: string, payload: ProductPayloadData) {
    return this.httClient.put(`api/products/${id}`, payload)
  }
}
