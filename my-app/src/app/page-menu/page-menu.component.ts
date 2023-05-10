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



//thử
  // cartcount = 0;
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
// --thử
//thử

subtotal = 0;
delivery = 0;
grandtotal = 0;
quantity = 1;
bind() {
  this.products = JSON.parse(sessionStorage.getItem('products') || '[]');
  console.log(this.products);
  this.subtotal = 0;
  this.grandtotal = 0;
  this.delivery = 0;
  this.subtotal = this.products.price * this.quantity;
  this.grandtotal = this.subtotal + this.delivery;
}
checkOut() {
  this._router.navigate(["checkout"]);
}


  //--thử



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




