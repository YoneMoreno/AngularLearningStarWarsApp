import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleButtonComponent } from './vehicle-button.component';

describe('VehicleButtonComponent', () => {
  let component: VehicleButtonComponent;
  let fixture: ComponentFixture<VehicleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
