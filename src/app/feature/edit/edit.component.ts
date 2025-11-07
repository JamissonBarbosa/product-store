import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/productData';
import { FormComponent } from '../../shared/form/form.component';

@Component({
  selector: 'app-edt',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productService = inject(ProductService)
  snackBarRef = inject(MatSnackBar)
  router = inject(Router)

  product: Product = inject(ActivatedRoute).snapshot.data['product']

  onSubmit(product: Product) {
    this.productService.putProducts(this.product.id,
      product
    )
      .subscribe(() => {
        this.snackBarRef.open('Produto editado com sucesso!', 'X');
        this.router.navigateByUrl('/')
      })

  }
}
