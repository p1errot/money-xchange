import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  private url: string = 'http://api.fixer.io/latest?base=';

  constructor(private http: Http) { }

  getConvertionRate(currencyBase: string = 'USD', currencyTarget: string = 'EUR') {
    return this.http.get(this.url + currencyBase + '&symbols=' + currencyTarget);
  }

}
