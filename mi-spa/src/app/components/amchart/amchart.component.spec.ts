import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmchartComponent } from './amchart.component';

describe('AmchartComponent', () => {
  let component: AmchartComponent;
  let fixture: ComponentFixture<AmchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
