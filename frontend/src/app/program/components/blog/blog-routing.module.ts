import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'blog-list',
      data: {breadcrumb: 'List'},
      loadChildren: () => import('./blog-list/blog-list.module').then(m => m.BlogListModule)
    },
    {
      path: 'blog-detail',
      data: {breadcrumb: 'Detail'},
      loadChildren: () => import('./blog-detail/blog-detail.module').then(m => m.BlogDetailModule)
    },
    {
      path: 'blog-edit',
      data: {breadcrumb: 'Edit'},
      loadChildren: () => import('./blog-edit/blog-edit.module').then(m => m.BlogEditModule)
    }
  ])],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
