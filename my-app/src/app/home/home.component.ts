import { Component, OnInit } from '@angular/core';
import { BiscottiAPIService } from '../biscotti-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  biscottis: any;
  errMessage: string = '';
  constructor(public _service: BiscottiAPIService) {
    this._service.getBiscottis().subscribe({
      next: (data) => {
        this.biscottis = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  // imagesList=[
  //   "../../assets/biscotti_images/biscotti gung.jpg",
  //   "../../assets/biscotti_images/biscotti matcha.jpg",
  //   "../../assets/biscotti_images/biscotti mix.jpg",
  //   "../../assets/biscotti_images/biscotti redvelvet.jpg",
  //   "../../assets/biscotti_images/biscotti toi.jpg"

  // ]
}
