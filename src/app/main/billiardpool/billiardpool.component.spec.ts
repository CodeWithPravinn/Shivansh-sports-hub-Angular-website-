import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliardpoolComponent } from './billiardpool.component';

describe('BilliardpoolComponent', () => {
  let component: BilliardpoolComponent;
  let fixture: ComponentFixture<BilliardpoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilliardpoolComponent]
    });
    fixture = TestBed.createComponent(BilliardpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
