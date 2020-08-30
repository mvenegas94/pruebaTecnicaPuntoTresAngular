import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUbicacionesComponent } from './form-ubicaciones.component';

describe('FormUbicacionesComponent', () => {
  let component: FormUbicacionesComponent;
  let fixture: ComponentFixture<FormUbicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUbicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
