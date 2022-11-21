import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OverviewAdminComponent} from './overview.admin.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: OverviewAdminComponent}
  ])],
  exports: [RouterModule]
})
export class PersonalDashboardRoutigModule {
}
