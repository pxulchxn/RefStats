import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from "./test/test.component";
import {AppLayoutComponent} from "./layout/app.layout.component";

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', component: TestComponent},
      {
        path: 'dashboard',
        loadChildren: () => import('./program/components/dashboards/dashboards.module').then(m => m.DashboardsModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./program/components/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: '',
        loadChildren: () => import('./program/components/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./program/components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./program/components/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }, {
    path: 'landing',
    loadChildren: () => import('./program/components/landing/landing.module').then(m => m.LandingModule)
  }, {
    path: 'auth',
    loadChildren: () => import('./program/components/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'notfound',
    loadChildren: () => import('./program/components/notfound/notfound.module').then(m => m.NotfoundModule)
  },
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
