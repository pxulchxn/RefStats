import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDashboardComponent } from './users.admin.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: UserDashboardComponent }
  ])],
  exports: [RouterModule]
})
export class UsersAdminRoutingModule { }
