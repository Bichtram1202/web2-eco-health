import { Component } from '@angular/core';
import { ProductAPIService } from '../product-api.service';

@Component({
  selector: 'app-san-pham-theo-loai',
  templateUrl: './san-pham-theo-loai.component.html',
  styleUrls: ['./san-pham-theo-loai.component.css']
})
export class SanPhamTheoLoaiComponent {

  ngOnInit(): void {
    this.getBiscottiList();
  }
  getBiscottiList() {

  }
  type: string='';
  products:any;
  biscotti: string ='';
  errMessage:string='';
  constructor(public _service: ProductAPIService){
    this._service.getProducts(0).subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
