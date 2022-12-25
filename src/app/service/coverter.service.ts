import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FixerApiService } from '../api/fixer-api.service';

@Injectable({
  providedIn: 'root'
})
export class CoverterService {
  currencylist: ISelectOption[] = [];
  rates: any = {};
  amount: number = 0;
  fromCurrency: string = '';
  toCurrency: string = '';
  showLoader: boolean = false;
  constructor(private fixerApi: FixerApiService) { }

  public getCurrencies(): Observable<any> {
    return this.fixerApi.getCurrencies()
      .pipe(
        map((response: any) => {
          debugger;
          var currencies: any = response.symbols;
          Object.keys(currencies).forEach((k: string) => {
            this.currencylist.push({ label: currencies[k], value: k })
          });
          return this.currencylist;
        })
      );
    ;
  }

  public getLatestConversion(base: string, to: string) {
    return this.fixerApi.getLatestConversion(base, to)
      .pipe(
        map((response: any) => {
          debugger;
          this.rates = response.rates;
          Object.assign(this.rates, response.rates);
          return this.rates;
        }));
  }

  public setform(amount: number, from: string, to: string) {
    this.amount = amount;
    this.fromCurrency = from;
    this.toCurrency = to;
  }

  public getAmountByCurrency(currency: string) {
    return (this.amount || 0) * (this.rates[currency] || 0);
  }
}

export interface ISelectOption {
  label: string;
  value: string;
}

