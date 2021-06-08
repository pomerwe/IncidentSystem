import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenIncidentPageComponent } from './open-incident-page.component';

describe('OpenIncidentPageComponent', () => {
  let component: OpenIncidentPageComponent;
  let fixture: ComponentFixture<OpenIncidentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenIncidentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenIncidentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
