import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CoverterService } from './service/coverter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency Converter';
  constructor(private httpClient: HttpClient, private service: CoverterService) {
    console.log(this.service.getCurrencies());
  }
}
