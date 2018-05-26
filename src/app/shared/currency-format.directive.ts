import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[mxCurrencyFormat]'
})
export class CurrencyFormatDirective {
  @Input('mxCurrencyFormat') format;

  constructor(private element: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.element.nativeElement.value,
      matchingNumbers: Array<any> | null = value.match(/(([0-9]+)(\,|\.)([0-9]{0,4})|([0-9]+))/);

    this.element.nativeElement.value = matchingNumbers ? matchingNumbers[0].replace(',', '.') : '';
  }

}
