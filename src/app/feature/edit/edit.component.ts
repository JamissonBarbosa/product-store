import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/productData';

@Component({
  selector: 'app-edt',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productService = inject(ProductService)
  snackBarRef = inject(MatSnackBar)
  router = inject(Router)

  product: Product = inject(ActivatedRoute).snapshot.data['product']

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    })
  })

  onSubmit() {
    this.productService.putProducts(this.product.id, {
      title: this.form.controls.title.value
    })
      .subscribe(() => {
        this.snackBarRef.open('Produto editado com sucesso!', 'X');
        this.router.navigateByUrl('/')
      })

  }
}
