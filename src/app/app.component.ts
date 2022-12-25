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
  show = false;
  fullScreen = true;
  template = ``
  constructor(private httpClient: HttpClient, public service: CoverterService) {
    
  }
}
