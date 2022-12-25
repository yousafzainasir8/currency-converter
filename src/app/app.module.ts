import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { ConverterMainComponent } from './converter-main/converter-main.component';
import { ConverterDetailComponent } from './converter-detail/converter-detail.component';
import { CurrencyExchangerComponent } from './currency-exchanger/currency-exchanger.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyChartComponent,
    CurrencyCardComponent,
    ConverterMainComponent,
    ConverterDetailComponent,
    CurrencyExchangerComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
