import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../model/productData';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  product = input<Product | null>(null)
  @Output() done = new EventEmitter<Product>()

  form!: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? '', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)]
      })
    })
  }

  onSubmit() {
    const product = this.form.value as Product
    this.done.emit(product)
  }
}
