import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../customer-api.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  ngOnInit(): void {}
  customers: any;
  activeCustomers: number = 0;
  errMessage: string = '';
  key: any;
  public searchText: string = '';
  p: number = 1;

  constructor(public _service: CustomerApiService) {
    this._service.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.activeCustomers = data.filter(
          (item: Customer) => item.Status == 'Active'
        ).length;
      },
      error: (_err) => {
        this.errMessage = _err;
      },
    });
  }
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
