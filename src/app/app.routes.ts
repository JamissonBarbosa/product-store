import { Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';

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
    path: 'edit-product',
    loadComponent: () =>
      import('./feature/edit/edit.component').then(c => c.EditComponent)
    ,
  }
];
