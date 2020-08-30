import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUbicacionesComponent } from './listar-ubicaciones.component';

describe('ListarUbicacionesComponent', () => {
  let component: ListarUbicacionesComponent;
  let fixture: ComponentFixture<ListarUbicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUbicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
