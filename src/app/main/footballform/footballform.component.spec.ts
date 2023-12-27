import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballformComponent } from './footballform.component';

describe('FootballformComponent', () => {
  let component: FootballformComponent;
  let fixture: ComponentFixture<FootballformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballformComponent]
    });
    fixture = TestBed.createComponent(FootballformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
