import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyballallComponent } from './volleyballall.component';

describe('VolleyballallComponent', () => {
  let component: VolleyballallComponent;
  let fixture: ComponentFixture<VolleyballallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolleyballallComponent]
    });
    fixture = TestBed.createComponent(VolleyballallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
