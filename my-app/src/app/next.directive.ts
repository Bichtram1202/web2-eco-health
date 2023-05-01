import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) {

  }
  @HostListener('click')
  nextFunc(){
   const document = this.el.nativeElement.parentElement.parentElement.children;
    const item = document.getElementsByClassName(".item");
    document.append(item[0]);
//     const items =document.getElementsByClassName("item");
// elm.push(items[0]);
  }
}
