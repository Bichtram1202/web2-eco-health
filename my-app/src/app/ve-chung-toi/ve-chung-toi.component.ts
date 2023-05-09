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
}
