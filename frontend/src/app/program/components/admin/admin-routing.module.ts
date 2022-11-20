import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProfileRoutingModule} from "./profile/profile-routing.module";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'profile',
      data: {breadcrumb: 'Users Dashboard'},
      loadChildren: () => import('./profile/profile-routing.module').then(m => m.ProfileRoutingModule)
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
