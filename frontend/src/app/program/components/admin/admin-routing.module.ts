import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'users',
      data: {breadcrumb: 'Users Dashboard'},
      loadChildren: () => import('./users/users.admin.module').then(m => m.UsersAdminModule)
    },
    {
      path: 'blog-edit',
      data: {breadcrumb: 'New Blog Post'},
      loadChildren: () => import('./blog-edit/blog-edit.module').then(m => m.BlogEditModule)
    },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
