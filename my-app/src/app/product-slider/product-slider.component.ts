import { Component } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent {
  products = [
    {
      name: 'Product 1',
      image: 'https://via.placeholder.com/350x150',
      price: 10,
      link: '/product/1'
    },
    {
      name: 'Product 2',
      image: 'https://via.placeholder.com/350x150',
      price: 20,
      link: '/product/2'
    },
    {
      name: 'Product 3',
      image: 'https://via.placeholder.com/350x150',
      price: 30,
      link: '/product/3'
    },
    {
      name: 'Product 4',
      image: 'https://via.placeholder.com/350x150',
      price: 40,
      link: '/product/4'
    },
    {
      name: 'Product 5',
      image: 'https://via.placeholder.com/350x150',
      price: 50,
      link: '/product/5'
    },
    {
      name: 'Product 6',
      image: 'https://via.placeholder.com/350x150',
      price: 60,
      link: '/product/6'
    }
  ];
}
