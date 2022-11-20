import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer } from 'src/app/program/api/customer';
import { CustomerService } from 'src/app/program/service/customer.service';

@Component({
    templateUrl: './profilelist.component.html'
})
export class ProfileListComponent implements OnInit {

    customers: Customer[] = [];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => this.customers = customers);
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }

}
