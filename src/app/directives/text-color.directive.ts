import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective {
  @HostBinding('class.whiteText') isWhiteText: boolean = true;

  constructor() {}
}
