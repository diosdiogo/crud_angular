import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleGreen]'
})
export class TitleGreenDirective {

  constructor( private el : ElementRef) { 
    el.nativeElement.style.color = '#0d5f4b';
    el.nativeElement.style.fontWeight = '700'

  }

}
