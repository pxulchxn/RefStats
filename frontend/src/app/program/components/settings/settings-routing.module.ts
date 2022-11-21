import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'profile',
      data: {breadcrumb: 'Profil Settings'},
      loadChildren: () => import('./profile/profile.settings.module').then(m => m.ProfileSettingsModule)
    }
  ])],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
