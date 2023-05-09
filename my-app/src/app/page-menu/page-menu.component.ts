import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductAPIService } from '../product-api.service';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent {


  title = 'my-app';
  images = [
    {
      imageSrc: '../../assets/bia_img/bia1.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: '../../assets/bia_img/bia2.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc: '../../assets/bia_img/bia3.png',
      imageAlt: 'nature3',
    },
  ];

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {

  }
  openListProduct() {
    this._router.navigate(['list.product']);
  }
  onSubmit() {
    this._router.navigateByUrl;
  }
  type: string='';
  products:any;
  errMessage:string='';
  category: string = ''
  constructor(public _service: ProductAPIService, private _router: Router, private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params => {
      let type = params['type']||'biscotti';
      this._service.getProductCategories(type).subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
  });
}


}




