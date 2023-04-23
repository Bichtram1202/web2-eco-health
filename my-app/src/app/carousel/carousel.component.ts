import { Component, OnInit, Input } from '@angular/core';

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  @Input() images: carouselImage[] = []
@Input() indicators =true;
// @Input() controls = true;
@Input() autoSlide =false;
@Input() slideInterval =3000;// default to 3 second

  selectedIndex =0;

ngOnInit(): void{
if(this.autoSlide){
  this.autoSlideImages();
}
}
//change slide om every 3 second
autoSlideImages(): void{
  setInterval(() =>{
    // this.onNextClick();
  }, this.slideInterval);
}
//sets index of image on dot/indicator click
selectImage(index: number): void{
  this.selectedIndex =index;
}
}
