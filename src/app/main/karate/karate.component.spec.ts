import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarateComponent } from './karate.component';

describe('KarateComponent', () => {
  let component: KarateComponent;
  let fixture: ComponentFixture<KarateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarateComponent]
    });
    fixture = TestBed.createComponent(KarateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
