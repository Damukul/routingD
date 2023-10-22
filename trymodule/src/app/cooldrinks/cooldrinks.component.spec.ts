import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooldrinksComponent } from './cooldrinks.component';

describe('CooldrinksComponent', () => {
  let component: CooldrinksComponent;
  let fixture: ComponentFixture<CooldrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CooldrinksComponent]
    });
    fixture = TestBed.createComponent(CooldrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
