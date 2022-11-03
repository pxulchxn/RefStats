import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PersonalDashboardComponent} from './personal.dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: PersonalDashboardComponent},
    {
      path: 'details-matches',
      data: {breadcrumb: 'Match Details'},
      loadChildren: () => import('../../details/matches/matches.details.module').then(m => m.MatchesDetailsModule)
    }
  ])],
  exports: [RouterModule]
})
export class PersonalDashboardRoutigModule {
}
