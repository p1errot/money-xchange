import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[mxCurrencyFormat]'
})
export class CurrencyFormatDirective {
  @Input('mxCurrencyFormat') format;

  constructor(private element: ElementRef) { }

  @HostListener('blur') onBlur() {
    const onlyNumbersWithDecimalsPattern = /(([0-9]+)(\,|\.)([0-9]{0,4})|([0-9]+))/;

    let value: string = this.element.nativeElement.value,
      matchingNumbers: Array<any> | null = value.match(onlyNumbersWithDecimalsPattern);

    this.element.nativeElement.value = matchingNumbers ? this.formatCurrency(matchingNumbers[0]) : '';
  }

  @HostListener('focus') onfocus() {
    let value: string = this.element.nativeElement.value;

    this.element.nativeElement.value = this.formatNumber(value);
  }

  public formatCurrency(numberToFormat: string, currencyCode: string = 'USD') {
    return parseFloat(numberToFormat)
      .toLocaleString('en-US', { style: 'currency', currency: currencyCode, maximumFractionDigits: 4 });
  }

  public formatNumber(currencyToFormat: string) {
    const regexComma = new RegExp(',', 'gm');

    return currencyToFormat
      .substr(1)
      .replace(regexComma, '');
  }

}
