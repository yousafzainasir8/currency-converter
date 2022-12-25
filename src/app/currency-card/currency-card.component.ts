import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoverterService } from '../service/coverter.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit, OnChanges {

  @Input() conversion: number = 0;
  @Input() amount: number = 0;
  @Input() currency!: string;
  total: string = "0.00";
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    this.total = ((this.amount || 0) * (this.conversion || 0)).toFixed(2);
  }
  ngOnInit(): void {
  }

}
