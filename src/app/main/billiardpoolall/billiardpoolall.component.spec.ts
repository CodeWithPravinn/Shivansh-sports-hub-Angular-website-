import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliardpoolallComponent } from './billiardpoolall.component';

describe('BilliardpoolallComponent', () => {
  let component: BilliardpoolallComponent;
  let fixture: ComponentFixture<BilliardpoolallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilliardpoolallComponent]
    });
    fixture = TestBed.createComponent(BilliardpoolallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
