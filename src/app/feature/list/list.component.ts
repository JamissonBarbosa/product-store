import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/productData';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = []

  productService = inject(ProductService)

  ngOnInit() {
    this.listProducts()
  }

  listProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products
    })
  }
}
