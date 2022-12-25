import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterDetailComponent } from './converter-detail.component';

describe('ConverterDetailComponent', () => {
  let component: ConverterDetailComponent;
  let fixture: ComponentFixture<ConverterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
