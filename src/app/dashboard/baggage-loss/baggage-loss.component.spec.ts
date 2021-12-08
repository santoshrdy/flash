import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageLossComponent } from './baggage-loss.component';

describe('BaggageLossComponent', () => {
  let component: BaggageLossComponent;
  let fixture: ComponentFixture<BaggageLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggageLossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
