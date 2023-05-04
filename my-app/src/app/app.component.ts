import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  customers: any;
  adminproducts: any;
  images: any;
  // title = 'my-app';
  // images = [
  //   {
  //     imageSrc: '../../assets/slideshow.jpg',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: '../../assets/slideshow2.jpg',
  //     imageAlt: 'nature2',
  //   },
  //   {
  //     imageSrc: '../../assets/slideshow3.jpg',
  //     imageAlt: 'nature3',
  //   },
  // ];

  // constructor(private _router: Router) {}

  // openListProduct() {
  //   this._router.navigate(['list.product']);
  // }
  // onSubmit() {
  //   this._router.navigateByUrl;
  // }
}
