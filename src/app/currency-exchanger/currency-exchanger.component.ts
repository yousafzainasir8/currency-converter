import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoverterService, ISelectOption } from '../service/coverter.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.css']
})
export class CurrencyExchangerComponent implements OnInit {

  currencyList: ISelectOption[] = [];
  form: FormGroup;
  blnDtlPg: boolean = false;
  currencyTitle: string = "";
  constructor(public service: CoverterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    debugger;
    let cach = this.service.amount;
    this.form = this.fb.group({
      amount: [cach, [Validators.required, Validators.min(0)]],
      fromCurrency: ["EUR", Validators.required],
      toCurrency: ["USD", Validators.required]
    });

    this.currencyList = this.service.getCurrencies();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        let from = params.get('from');
        if (from != null && from != '') {
          this.fromCurrency?.setValue(from);
          this.blnDtlPg = true;
          let currency = this.currencyList.find(x => x.value == from);
          if (currency) {
            this.currencyTitle = currency.value + " - " + currency.label;
          }
        }

        let to = params.get('to');
        if (to != null && to != '') {
          this.toCurrency?.setValue(to);
          this.calculateRates();
        }
      }
    )
  }

  get fromCurrency() {
    return this.form.get('fromCurrency');
  }
  get toCurrency() {
    return this.form.get('toCurrency');
  }
  get amount() {
    return this.form.get('amount');
  }

  conversionRate() {
    let conversion = `1.00 ${this.fromCurrency?.value} = xx.xx ${this.toCurrency?.value}`;

    if (this.service.rates[this.toCurrency?.value])
      conversion = `1.00 ${this.fromCurrency?.value} = ${(this.service.rates[this.toCurrency?.value] || 0).toFixed(2)} 
      ${this.toCurrency?.value}`;
    return conversion;
  }

  onSwapData() {
    let temp = this.fromCurrency?.value;
    this.fromCurrency?.setValue(this.toCurrency?.value);
    this.toCurrency?.setValue(temp);
    this.calculateRates();
    let currency = this.currencyList.find(x => x.value == this.fromCurrency?.value);
    if (currency)
      this.currencyTitle = currency.value + " - " + currency.label;

  }

  calculateRates() {
    if (this.form.valid) {
      let data = this.form.value;
      this.service.getLatestConversion(data.fromCurrency, data.toCurrency);
      this.service.setform(data.amount, data.fromCurrency, data.toCurrency);
    }
  }

  getTotalAmount() {
    let total = (this.service.rates[this.toCurrency?.value] || 0) * (this.service.amount || 0)
    return total.toFixed(2) + " " + this.toCurrency?.value;
  }
  onDetails() {
    this.calculateRates();
    this.router.navigate([`/detail/${this.fromCurrency?.value}/${this.toCurrency?.value}`]);
  }
}
