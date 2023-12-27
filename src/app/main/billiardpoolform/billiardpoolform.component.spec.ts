import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliardpoolformComponent } from './billiardpoolform.component';

describe('BilliardpoolformComponent', () => {
  let component: BilliardpoolformComponent;
  let fixture: ComponentFixture<BilliardpoolformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilliardpoolformComponent]
    });
    fixture = TestBed.createComponent(BilliardpoolformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
