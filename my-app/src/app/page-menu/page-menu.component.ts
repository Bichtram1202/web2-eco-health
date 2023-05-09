import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductAPIService } from '../product-api.service';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent {
  biscottis: any;
  // cartcount = 0;
  title = 'my-app';
  images = [
    {
      imageSrc: '../../assets/slideshow.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: '../../assets/slideshow2.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc: '../../assets/slideshow3.jpg',
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

  // ngOnInit(): void{
  //   if(sessionStorage.getItem("products") != null){
  //     let products = JSON.parse(sessionStorage.getItem("products") || "[]")
  //     this.cartcount = products.length;
  //   }
  // }
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




