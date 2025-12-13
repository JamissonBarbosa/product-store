import { Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { getProductsResolver } from './shared/resolvers/get-products.resolver';

import { getProductResolver } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getProductsResolver
    },
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
      product: getProductResolver
    },
    loadComponent: () =>
      import('./feature/edit/edit.component').then(c => c.EditComponent)
    ,
  }
];
