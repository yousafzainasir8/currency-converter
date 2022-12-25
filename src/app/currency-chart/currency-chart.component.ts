import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MockFixerApiService } from '../api/mock-fixer-api.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.css']
})
export class CurrencyChartComponent implements OnInit, OnChanges {
  public lineChartData: ChartDataset[] = [{ data: [], label: 'History' }];
  public lineChartLabels: any[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  @Input() from: string = '';
  @Input() to: string = '';

  constructor(private mockService: MockFixerApiService) { }
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  ngOnChanges(changes: SimpleChanges): void {
    this.lineChartData = [{ data: [], label: `History of ${this.to} against ${this.from} ` }];
    this.lineChartData[0].data = [];
    this.lineChartLabels = [];
    this.mockService.getHistory().subscribe({
      next: (items) => {
        items.forEach((ci) => {
          this.lineChartData[0].data.push(ci.rate);
          let dt = new Date(ci.date);
          this.lineChartLabels.push(this.monthNames[dt.getMonth()]);
        });
      },
      error: (err) => console.log(err),
    });

  }

  ngOnInit() {
  }

}
