import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { inject } from '@angular/core';
import { ProductService } from './services/product.service';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./feature/create/create.component').then(c => c.CreateComponent)
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productService = inject(ProductService)
        return productService.getProductByID(route.paramMap.get('id') as string)
      }
    },
    loadComponent: () =>
      import('./feature/edit/edit.component').then(c => c.EditComponent)
    ,
  }
];
