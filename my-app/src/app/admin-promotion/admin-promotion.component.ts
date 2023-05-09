import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AdminProductApiService } from '../admin-product-api.service';
import { PromtionApiService } from '../promtion-api.service';
@Component({
  selector: 'app-admin-promotion',
  templateUrl: './admin-promotion.component.html',
  styleUrls: [
    '../customer/customer.component.css',
    '../customer-detail/customer-detail.component.css',
  ],
})
export class AdminPromotionComponent {
  promotions: any;
  errMessage: string = '';
  submited: boolean = false;
  promotionEdit = this.fb.group({
    Id: ['', Validators.required],
    PromotionName: ['', Validators.required],
    Used: ['', Validators.required],
    Describe: ['', Validators.required],
    Start: ['', Validators.required],
    End: ['', Validators.required],
    ProductType: ['', Validators.required],
    Customer: ['', Validators.required],
  });
  constructor(public _service: PromtionApiService, private fb: FormBuilder) {
    this._service.getPromotions().subscribe({
      next: (data) => {
        this.promotions = data[0];

        this.promotionEdit = this.fb.group({
          Id: [this.promotions.Id, Validators.required],
          PromotionName: [this.promotions.PromotionName, Validators.required],
          Used: [this.promotions.Used, Validators.required],
          Describe: [this.promotions.Describe, Validators.required],
          Start: [this.promotions.Start, Validators.required],
          End: [this.promotions.End, Validators.required],
          ProductType: [this.promotions.ProductType, Validators.required],
          Customer: [this.promotions.Customer, Validators.required],
        });
      },
      error: (_err) => {
        this.errMessage = _err;
      },
    });
  }
  onSubmit(): any {
    this.submited = true;
    if (this.promotionEdit.invalid) {
      return false;
    } else {
      this._service.putPromotion(this.promotionEdit.value).subscribe({
        next: (data) => {
          alert('Chỉnh sửa thành công');
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
    }
  }
  onCancel() {
    this.promotionEdit = this.fb.group({
      Id: [this.promotions.Id, Validators.required],
      PromotionName: [this.promotions.PromotionName, Validators.required],
      Used: [this.promotions.Used, Validators.required],
      Describe: [this.promotions.Describe, Validators.required],
      Start: [this.promotions.Start, Validators.required],
      End: [this.promotions.End, Validators.required],
      ProductType: [this.promotions.ProductType, Validators.required],
      Customer: [this.promotions.Customer, Validators.required],
    });
  }
}
