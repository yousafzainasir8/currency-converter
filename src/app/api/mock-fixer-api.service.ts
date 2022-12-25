import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockFixerApiService {

  constructor() { }
  getHistory() {
    return of([
      {
        id: "1",
        rate: 10,
        date: "2022-01-31"
      },
      {
        id: "2",
        rate: 20,
        date: "2022-02-28"
      },
      {
        id: "3",
        rate: 30,
        date: "2022-03-31"
      },
      {
        id: "4",
        rate: 10,
        date: "2022-04-30"
      },
      {
        id: "5",
        rate: 50,
        date: "2022-05-30"
      },
      {
        id: "6",
        rate: 5,
        date: "2022-06-30"
      },
      {
        id: "7",
        rate: 13,
        date: "2022-07-30"
      },
      {
        id: "8",
        rate: 25,
        date: "2022-08-28"
      },
      {
        id: "9",
        rate: 30,
        date: "2022-09-30"
      },
      {
        id: "10",
        rate: 30,
        date: "2022-10-30"
      },
      {
        id: "11",
        rate: 70,
        date: "2022-11-30"
      },
      {
        id: "12",
        rate: 5,
        date: "2022-12-30"
      }
    ]);
  }
}
