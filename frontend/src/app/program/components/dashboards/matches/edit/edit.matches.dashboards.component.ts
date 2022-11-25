import {Component} from '@angular/core';
import {MessageService, ConfirmationService} from 'primeng/api';
import {Customer} from "../../../../api/customer";
import {CustomerService} from "../../../../service/customer.service";

@Component({
  templateUrl: './edit.matches.dashboards.component.html',
  providers: [MessageService, ConfirmationService]
})
export class EditMatchesDashboardsComponent {

  mannschaftsart: any[] = [];

  league: any[] = [];

  function: any[] = [];

  value1: any[] = [];

  valCheck: boolean = false;

  customers1: Customer[] = [];

  loading: boolean = true;

  beo: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.mannschaftsart = [
      {name: 'Herren', code: 'men'},
      {name: 'Frauen', code: 'women'},
      {name: 'Junioren', code: 'youth'}
    ];

    this.league = [
      {name: 'Landesliga', code: 'll'},
      {name: 'Bezirksliga', code: 'bzl'},
      {name: 'Kreisliga', code: 'kl'},
      {name: '1. Kreisklasse', code: '1kkl'},
      {name: '2. Kreisklasse', code: '2kkl'}
    ]

    this.function = [
      {name: 'Schiedsrichter', code: 'referee'},
      {name: '1. Assistent', code: 'first_assistent'},
      {name: '2. Assistent', code: 'second_assistent'},
      {name: '4. Offizieller', code: 'fourth_official'}
    ]

    this.customerService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;

      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    });
  }


  switchValCheck() {
    this.valCheck = !this.valCheck;
  }

  switchBeo(){
    this.beo = !this.beo;
  }

}
