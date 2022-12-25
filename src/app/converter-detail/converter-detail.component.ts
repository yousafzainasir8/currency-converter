import { Component, OnInit } from '@angular/core';
import { CoverterService } from '../service/coverter.service';

@Component({
  selector: 'app-converter-detail',
  templateUrl: './converter-detail.component.html',
  styleUrls: ['./converter-detail.component.css']
})
export class ConverterDetailComponent implements OnInit {

  constructor(public coverterService: CoverterService) { }

  ngOnInit(): void {
  }

}
