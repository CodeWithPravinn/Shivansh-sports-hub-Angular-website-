import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletennisallComponent } from './tabletennisall.component';

describe('TabletennisallComponent', () => {
  let component: TabletennisallComponent;
  let fixture: ComponentFixture<TabletennisallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletennisallComponent]
    });
    fixture = TestBed.createComponent(TabletennisallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
