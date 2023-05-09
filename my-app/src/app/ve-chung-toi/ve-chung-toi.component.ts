import { Component } from '@angular/core';

@Component({
  selector: 'app-ve-chung-toi',
  templateUrl: './ve-chung-toi.component.html',
  styleUrls: ['./ve-chung-toi.component.css']
})


export class VeChungToiComponent {
  displayTags = false;
  showTags() {
    this.displayTags = !this.displayTags;
  }
  images = [
    {
      imageSrc: '../../assets/lienhe_img/wireframe (7) 1.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: '../../assets/lienhe_img/wireframe (7) 1.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc: '../../assets/lienhe_img/wireframe (7) 1.png',
      imageAlt: 'nature3',
    },
  ];
}
