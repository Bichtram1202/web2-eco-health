import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent {

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


  constructor(private _router: Router) {}

  openListProduct() {
    this._router.navigate(['list.product']);
  }
  onSubmit() {
    this._router.navigateByUrl;
  }
}
