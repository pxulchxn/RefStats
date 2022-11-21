import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewAdminComponent } from './overview.admin.component';
import { PersonalDashboardRoutigModule } from './overview.admin-routing.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';

@NgModule({
	imports: [
		CommonModule,
    PersonalDashboardRoutigModule,
		ButtonModule,
		RippleModule,
		DropdownModule,
		FormsModule,
		TableModule,
		InputTextModule,
		InputTextareaModule,
		ChartModule,
		RatingModule,
		KnobModule
	],
	declarations: [OverviewAdminComponent]
})
export class OverviewAdminModule { }
