import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'details-matches',
      data: {breadcrumb: 'Match Details'},
      loadChildren: () => import('./matches/matches.details.module').then(m => m.MatchesDetailsModule)
    }
  ])],
  exports: [RouterModule]
})
export class DetailsRoutingModule {
}
