import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/productData';
import { Router, RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, MatButtonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = []

  router = inject(Router)
  productService = inject(ProductService)

  ngOnInit() {
    this.listProducts()
  }

  listProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products
    })
  }

  onEdit(product: Product) {
    this.router.navigate(['edit-product/', product.id])
  }
}
