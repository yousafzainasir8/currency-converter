import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FixerApiService {

  api = 'https://api.apilayer.com/fixer/';
  constructor(private httpClient: HttpClient) { }
 
  /**
   * Using this endpoint you will be able to get Object of available currencies for subscription plan. 
   * @returns 
   *  response={
   *    "success": true,
   *    "symbols": {
   *    "AED": "United Arab Emirates Dirham"..
   *    }
   *   }
   */
  public getCurrencies() {
    return this.httpClient.get(`${this.api}symbols`);
  }
 
  /**
  * Using this endpoint you will be able to convert give ammount to desired currency.
  * @param to currency we want. e.g EUR
  * @param from currency we have. e.g GBP
  * @param amount to be converted  e.g 10
  * @returns response=
  * {
  *  "date": "2022-12-24",
  *  "info": {
  *  "rate": 0.885071,
  *    "timestamp": 1671891782
  *  },
  *  "query": {
  *    "amount": 4,
  *    "from": "EUR",
  *    "to": "GBP"
  *  },
  *  "result": 3.540284,
  *  "success": true
  *}
  */
  public getConversion(to: string, from: string, amount: number) {
    return this.httpClient.get(`${this.api}convert?to=${to}&from=${from}&amount=${amount}`);
  }
 
  /**
   *  Using this endpoint you will be able to  endpoint will return real-time exchange rate data updated every 60 minutes, every 10 minutes or every 60 seconds.
   * @param base currency we have. e.g. USD
   * @param symbols comma-separated currencies we want conversion for. e.g. GBP,JPY,EUR
   * @returns 
   * response={
   *   "success": true,
   *  "timestamp": 1519296206,
   *  "base": "USD",
   *  "date": "2022-12-24",
   *  "rates": {
   *     "GBP": 0.72007,
   *     "JPY": 107.346001,
   *     "EUR": 0.813399,
   *  }
   * }
   */
  public getLatestConversion(base: string, symbols: string) {
    return this.httpClient.get(`${this.api}latest?base=${base}&symbols=${symbols}`);
  }

  /**
   * Using this endpoint you will be able to retrieve information about how currencies fluctuate on a day-to-day basis. 
   * @param start_date start date e.g.2021-12-24 
   * @param end_date 2022-12-24
   * @returns 
   * response = {
   * "success":true,
   * "fluctuation":true,
   * "start_date":"2018-02-25",
   * "end_date":"2018-02-26",
   * "base":"EUR",
   * "rates":{
   *     "USD":{
   *         "start_rate":1.228952,
   *         "end_rate":1.232735,
   *         "change":0.0038,
   *         "change_pct":0.3078
   *     },
   *   }
   * }  
   */
  public getFluctuation(start_date: string, end_date: string) {
    return this.httpClient.get(`${this.api}fluctuation?start_date=${start_date}&end_date =${end_date}`);
  }

  /**
   * Using this endpoint you will be able to query the API for daily historical rates between two dates of your choice, with a maximum time frame of 365 days.
   * @param start_date starting from date e.g. 2022-05-01 
   * @param end_date  end date of history e.g. 2022-12-01
   * @returns 
   * reponse = {
   *    "success": true,
   *    "timeseries": true,
   *    "start_date": "2012-05-01",
   *    "end_date": "2012-05-03",
   *    "base": "EUR",
   *    "rates": {
   *       "2012-05-01":{
   *       "USD": 1.322891,
   *       "AUD": 1.278047,
   *       "CAD": 1.302303
   *     }
   *   }
   * }
   */
  public getTimeseries(start_date: string, end_date: string) {
    return this.httpClient.get(`${this.api}timeseries?start_date=${start_date}&end_date =${end_date}`);
  }

  /**
   * Using this endpoint you will be able to query Historical rates.rates are available for most currencies all the way back to the year of 1999.
   * @param from_date starting date e.g. 2013-12-24
   * @param base  base currency e.g. GBP
   * @param symbols  list of comma-separated currency e.g USD,CAD,EUR
   * @returns 
   * reponse ={
   *   "success": true,
   *   "historical": true,
   *   "date": "2013-12-24",
   *   "timestamp": 1387929599,
   *   "base": "GBP",
   *   "rates": {
   *       "USD": 1.636492,
   *       "EUR": 1.196476,
   *       "CAD": 1.739516
   *   }
   * }
   */
  public getHistoricalRates(from_date: string, base: string, symbols: string) {
    return this.httpClient.get(`${this.api}${from_date}?base=${base}&end_date =${symbols}`);
  }

}
