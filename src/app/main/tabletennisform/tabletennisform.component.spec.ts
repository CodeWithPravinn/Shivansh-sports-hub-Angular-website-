import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletennisformComponent } from './tabletennisform.component';

describe('TabletennisformComponent', () => {
  let component: TabletennisformComponent;
  let fixture: ComponentFixture<TabletennisformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletennisformComponent]
    });
    fixture = TestBed.createComponent(TabletennisformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
