import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketingformComponent } from './sketingform.component';

describe('SketingformComponent', () => {
  let component: SketingformComponent;
  let fixture: ComponentFixture<SketingformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SketingformComponent]
    });
    fixture = TestBed.createComponent(SketingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
