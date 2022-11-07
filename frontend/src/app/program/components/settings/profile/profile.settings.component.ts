import {Component} from '@angular/core';
import {MessageService, ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './profile.settings.component.html',
  providers: [MessageService, ConfirmationService]
})
export class ProfileSettingsComponent {

}
