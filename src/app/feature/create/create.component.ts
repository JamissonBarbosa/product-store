import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  productService = inject(ProductService)
  snackBarRef = inject(MatSnackBar)
  router = inject(Router)

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    })
  })



  onSubmit() {
    this.productService.postProducts({
      title: this.form.controls.title.value
    })
      .subscribe(() => {
        this.snackBarRef.open('Produto salvo com sucesso!', 'X');
        this.router.navigateByUrl('/')
      })
  }
}
