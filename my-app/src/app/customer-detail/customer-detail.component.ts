import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../customer-api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer/customer';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  formvalue: any;
  errMessage: string = '';
  id: any;
  customers: Customer[] = [];
  myCustomer: any;
  activeCustomers: number = 0;

  submited: boolean = false;
  customerEdit = this.fb.group({
    CustomerId: ['', Validators.required],
    _id: ['', Validators.required],
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
  ) {
    this._service.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.activeCustomers = data.filter(
          (item: Customer) => item.Status == 'Active'
        )?.length;
      },
      error: (_err) => {
        this.errMessage = _err;
      },
    });
  }
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getCustomer(this.id);
  }

  getCustomer(id: any) {
    this._service.getCustomer(id).subscribe({
      next: (data) => {
        this.myCustomer = data;
        this.customerEdit = this.fb.group({
          CustomerId: [this.myCustomer.CustomerId, Validators.required],
          _id: [this.myCustomer._id, Validators.required],
          CustomerName: [this.myCustomer.CustomerName, Validators.required],
          NumberPhone: [this.myCustomer.NumberPhone, Validators.required],
          Email: [this.myCustomer.Email, Validators.required],
          Address: [this.myCustomer.Address, Validators.required],
          Gender: [this.myCustomer.Gender, Validators.required],
          Status: [this.myCustomer.Status, Validators.required],
        });
      },
    });
  }
  toggleStatus() {
    this.customerEdit.patchValue({
      Status:
        this.customerEdit.value.Status === 'Active' ? 'Inactive' : 'Active',
    });
  }
  onCancel() {
    this.customerEdit = this.fb.group({
      CustomerId: [this.myCustomer.CustomerId, Validators.required],
      _id: [this.myCustomer._id, Validators.required],
      CustomerName: [this.myCustomer.CustomerName, Validators.required],
      NumberPhone: [this.myCustomer.NumberPhone, Validators.required],
      Email: [this.myCustomer.Email, Validators.required],
      Address: [this.myCustomer.Address, Validators.required],
      Gender: [this.myCustomer.Gender, Validators.required],
      Status: [this.myCustomer.Status, Validators.required],
    });
  }

  get f() {
    return this.customerEdit.controls;
  }
  onSubmit(): any {
    this.submited = true;
    if (this.customerEdit.invalid) {
      return false;
    } else {
      this._service
        .putCustomer(this.customerEdit.value, this.customerEdit.value._id)
        .subscribe({
          next: (data) => {
            alert('Chỉnh sửa thành công');
          },
          error: (err) => {
            this.errMessage = err;
          },
        });
    }
  }
}
