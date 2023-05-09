import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminProductApiService } from '../admin-product-api.service';
import { ProductType } from '../admin-products/product';
@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: [
    '../customer/customer.component.css',
    '../customer-detail/customer-detail.component.css',
  ],
})
export class AdminProductDetailComponent {
  errMessage: string = '';
  myProduct: any;
  submited: boolean = false;
  id: any;
  isCreate = false;

  productEdit = this.fb.group({
    _id: ['', Validators.required],
    id: ['', Validators.required],
    name: ['', Validators.required],
    sold: ['', Validators.required],
    price: ['', Validators.required],
    describe: ['', Validators.required],
    type: ['', Validators.required],
    img_url: ['', Validators.required],
  });
  constructor(
    private _service: AdminProductApiService,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    if (this.id == 'create') {
      this.isCreate = true;
      this.productEdit.patchValue({ _id: 'create' });
    } else this.getProduct(this.id);
  }
  getProduct(id: any) {
    this._service.getProduct(id).subscribe({
      next: (data) => {
        this.myProduct = data;
        this.productEdit = this.fb.group({
          id: [this.myProduct.id, Validators.required],
          _id: [this.myProduct._id, Validators.required],
          name: [this.myProduct.name, Validators.required],
          sold: [this.myProduct.sold, Validators.required],
          price: [this.myProduct.price, Validators.required],
          describe: [this.myProduct.describe, Validators.required],
          type: [this.myProduct.type, Validators.required],
          img_url: [this.myProduct.img_url, Validators.required],
        });
      },
    });
  }
  onCancel() {
    this.productEdit = this.fb.group({
      id: [this.myProduct.id, Validators.required],
      _id: [this.myProduct._id, Validators.required],
      name: [this.myProduct.name, Validators.required],
      sold: [this.myProduct.sold, Validators.required],
      price: [this.myProduct.price, Validators.required],
      describe: [this.myProduct.describe, Validators.required],
      type: [this.myProduct.type, Validators.required],
      img_url: [this.myProduct.img_url, Validators.required],
    });
  }
  get f() {
    return this.productEdit.controls;
  }
  onSubmit(): any {
    this.submited = true;
    console.log('submited: ', true);

    if (this.productEdit.invalid) {
      return false;
    } else {
      if (this.isCreate) {
        console.log('create');
        this._service
          .postProduct({
            id: this.productEdit.value.id,
            name: this.productEdit.value.name,
            type: this.productEdit.value.type,
            img_url: this.productEdit.value.img_url,
            price: this.productEdit.value.price,
            describe: this.productEdit.value.describe,
            sold: this.productEdit.value.sold,
          })
          .subscribe({
            next: (data) => {
              console.log('them: ', data);
              alert('Thêm sản phẩm thành công');
            },
            error: (err) => {
              console.log('err: ', err);
              this.errMessage = err;
            },
          });
      } else {
        this._service
          .putProduct(this.productEdit.value, this.productEdit.value._id)
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
}
