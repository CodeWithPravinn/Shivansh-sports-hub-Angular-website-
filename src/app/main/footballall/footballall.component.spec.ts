import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballallComponent } from './footballall.component';

describe('FootballallComponent', () => {
  let component: FootballallComponent;
  let fixture: ComponentFixture<FootballallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballallComponent]
    });
    fixture = TestBed.createComponent(FootballallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
