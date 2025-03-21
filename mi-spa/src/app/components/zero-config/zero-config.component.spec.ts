import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroConfigComponent } from './zero-config.component';

describe('ZeroConfigComponent', () => {
  let component: ZeroConfigComponent;
  let fixture: ComponentFixture<ZeroConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
