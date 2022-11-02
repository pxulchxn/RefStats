import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDashboardComponent } from './users.dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: UserDashboardComponent }
  ])],
  exports: [RouterModule]
})
export class UsersDashboardRoutingModule { }
