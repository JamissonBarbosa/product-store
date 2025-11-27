import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/productData';
import { Router, RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, MatButtonModule, RouterLink, MatDialogModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = []

  router = inject(Router)
  productService = inject(ProductService)
  confirmationDialogService = inject(ConfirmationDialogService)

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

  onDelete(product: Product) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productService.deleteProduct(product.id)
          .subscribe(() => {
            this.listProducts()
          })
      })
  }
}
