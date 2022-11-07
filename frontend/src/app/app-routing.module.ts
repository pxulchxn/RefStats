import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', component: TestComponent},
      {path: '', loadChildren: () => import('./program/components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
      {path: '', loadChildren: () => import('./program/components/auth/auth.module').then(m => m.AuthModule) }
    ]
  },{path: 'landing', loadChildren: () => import('./program/components/landing/landing.module').then(m => m.LandingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
