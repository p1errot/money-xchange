import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currencyInput;
  currencyValue;

  constructor() { }

  ngOnInit() {
  }

  calculateConversion(currency:any) {
    this.currencyValue = currency;
  }

}
