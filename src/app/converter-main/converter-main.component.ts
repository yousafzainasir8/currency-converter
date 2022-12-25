import { Component, OnInit } from '@angular/core';
import { CoverterService } from '../service/coverter.service';

@Component({
  selector: 'app-converter-main',
  templateUrl: './converter-main.component.html',
  styleUrls: ['./converter-main.component.css']
})
export class ConverterMainComponent implements OnInit {

  constructor(public coverterService: CoverterService) { }

  ngOnInit(): void {
  }

}
