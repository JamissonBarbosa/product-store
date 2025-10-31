import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: any[] = []
  httClient = inject(HttpClient)

  ngOnInit() {
    this.httClient.get<any>('api/products').subscribe((products) => {
      this.products = products
    })
  }
}
