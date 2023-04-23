import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../customer-api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customer: any;
  errMessage: string = '';
  id: any;
  submited: boolean = false;
  customerEdit = this.fb.group({
    CustomerId: ['', Validators.required],
    CustomerName: ['', Validators.required],
    NumberPhone: ['', Validators.required],
    Email: ['', Validators.required],
    Address: ['', Validators.required],
    Gender: ['', Validators.required],
    Status: ['', Validators.required],
  });

  constructor(
    private _service: CustomerApiService,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getCustomer(this.id);
  }
  getCustomer(id: any) {
    this._service.getCustomer(id).subscribe({
      next: (data) => {
        this.customer = data;
        let myCustomer = data;
        console.log('myCustomer', myCustomer);
        this.customerEdit = this.fb.group({
          CustomerId: [myCustomer.CustomerId, Validators.required],
          CustomerName: [myCustomer.CustomerName, Validators.required],
          NumberPhone: [myCustomer.NumberPhone, Validators.required],
          Email: [myCustomer.Email, Validators.required],
          Address: [myCustomer.Address, Validators.required],
          Gender: [myCustomer.Gender, Validators.required],
          Status: [myCustomer.Status, Validators.required],
        });
      },
    });
  }
  get f() {
    return this.customerEdit.controls;
  }
  onSubmit(): any {
    this.submited = true;
    if (this.customerEdit.invalid) {
      return false;
    }
    this._service.putCustomer(this.customerEdit.value).subscribe({
      next: (data) => {
        this.customerEdit = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
