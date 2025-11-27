import { Component, inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { filter, Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/productData';


@Component({
  selector: 'app-confirmaion-dialoge',
  standalone: true,
  template: `
    <h2 mat-dialog-title>Deletar Produto</h2>
    <mat-dialog-content>
      Você gostaria de deletar esse produto?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button cdkFocusInitial color="accent" (click)="onCancel()">cancelar</button>
      <button mat-raised-button (click)="OnConfirm()">confirmar</button>
    </mat-dialog-actions>
    `,
  imports: [MatButtonModule, MatDialogModule],
})
export class confirmatinDialogComponent {
  matdialogRef = inject(MatDialogRef)

  onCancel() {
    this.matdialogRef.close(false)
  }

  OnConfirm() {
    this.matdialogRef.close(true)
  }
}


@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  products: Product[] = []

  matDialog = inject(MatDialog)
  productService = inject(ProductService)

  constructor() { }

  ngOnInit() {
    this.listProducts()
  }

  listProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products
    })
  }

  openDialog(): Observable<boolean> {
    return this.matDialog
      .open(confirmatinDialogComponent)
      .afterClosed()

  }
}
