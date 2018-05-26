import { Component, Directive, OnInit } from '@angular/core';
import { CurrencyFormatDirective } from '../shared/currency-format.directive';

@Component({
  selector: 'mx-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  convertionDate = '2018-05-26';
  currencyInput;
  currencyValue;

  constructor() { }

  ngOnInit() {
  }

  calculateConversion(currency: any) {
    const currencyFormatDirective = new CurrencyFormatDirective(null);

    let plainNumber = currencyFormatDirective.formatNumber(currency) || '0';

    this.currencyValue = currencyFormatDirective.formatCurrency(plainNumber, 'EUR');
  }

}
