import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/form/form.component';
import { Product } from '../../model/productData';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  productService = inject(ProductService)
  snackBarRef = inject(MatSnackBar)
  router = inject(Router)





  onSubmit(product: Product) {
    this.productService.postProducts(product)
      .subscribe(() => {
        this.snackBarRef.open('Produto salvo com sucesso!', 'X');
        this.router.navigateByUrl('/')
      })
  }
}
