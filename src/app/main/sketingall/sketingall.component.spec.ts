import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketingallComponent } from './sketingall.component';

describe('SketingallComponent', () => {
  let component: SketingallComponent;
  let fixture: ComponentFixture<SketingallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SketingallComponent]
    });
    fixture = TestBed.createComponent(SketingallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
