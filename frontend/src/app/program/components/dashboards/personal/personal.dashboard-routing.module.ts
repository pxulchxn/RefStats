import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalDashboardComponent } from './personal.dashboard.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PersonalDashboardComponent }
	])],
	exports: [RouterModule]
})
export class PersonalDashboardRoutigModule { }
