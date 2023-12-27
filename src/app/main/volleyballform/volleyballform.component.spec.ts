import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyballformComponent } from './volleyballform.component';

describe('VolleyballformComponent', () => {
  let component: VolleyballformComponent;
  let fixture: ComponentFixture<VolleyballformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolleyballformComponent]
    });
    fixture = TestBed.createComponent(VolleyballformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
