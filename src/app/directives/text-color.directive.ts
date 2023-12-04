// import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appTextColor]',
// })
// export class TextColorDirective {
//   // @Input('appTextColor') color: string = 'black';

//   // constructor(private eleRef: ElementRef) {
//   //   eleRef.nativeElement.style.color = 'green';
//   // }
  
// }


import { Directive, ElementRef } from '@angular/core';
 
@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
 
  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.color = 'white';
  }
 
}