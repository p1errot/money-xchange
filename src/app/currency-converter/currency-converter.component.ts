import { Component, Directive, OnInit } from '@angular/core';

import { CurrencyFormatDirective } from '../shared/currency-format.directive';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'mx-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  private currencyFormatDirective = new CurrencyFormatDirective();
  convertionDate = '';
  currencyInput: string = '';
  currencyValue: string = '';
  currencyBase: string = 'USD';
  currencyTarget: string = 'EUR';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getConversion(currency: any) {
    let plainNumber = this.currencyFormatDirective.formatNumber(currency) || '0';
    
    this.calculateConvertion(plainNumber);
  }
  
  private getRate(base, target) {
    return this.apiService.getConvertionRate(base, target);
  }
  
  private calculateConvertion(amountToConvert) {
    this.getRate(this.currencyBase, this.currencyTarget)
      .subscribe(response => {
        let apiResponse = response.json(),
          convertionRate = apiResponse.rates[this.currencyTarget],
          convertedAmount = (amountToConvert * convertionRate).toString();

        this.currencyValue = this.currencyFormatDirective.formatCurrency(convertedAmount, this.currencyTarget);
        this.convertionDate = apiResponse.date;
      });
  }

}
