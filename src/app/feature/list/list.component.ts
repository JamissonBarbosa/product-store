import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/productData';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { NoItemsComponent } from './components/no-items/no-items/no-items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, MatButtonModule, RouterLink, MatDialogModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data['products'])

  router = inject(Router)
  productService = inject(ProductService)
  confirmationDialogService = inject(ConfirmationDialogService)

  onEdit(product: Product) {
    this.router.navigate(['edit-product/', product.id])
  }

  onDelete(product: Product) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productService.deleteProduct(product.id)
          .subscribe(() => {
            this.productService.getAllProducts()
              .subscribe((products) => {
                this.products.set(products)
              })
          })
      })
  }
}
