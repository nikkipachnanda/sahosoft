import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppcolor]'
})
export class AppcolorDirective {

  constructor(private eRef:ElementRef) 
  {
    this.eRef.nativeElement.style.color="green";
  }

}
