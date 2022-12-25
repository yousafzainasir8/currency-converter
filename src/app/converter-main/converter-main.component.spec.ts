import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterMainComponent } from './converter-main.component';

describe('ConverterMainComponent', () => {
  let component: ConverterMainComponent;
  let fixture: ComponentFixture<ConverterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
