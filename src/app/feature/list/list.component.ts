import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/productData';
import { CardComponent } from '../coponents/card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
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
