import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJuegoComponent } from './formulario-juego.component';

describe('FormularioJuegoComponent', () => {
  let component: FormularioJuegoComponent;
  let fixture: ComponentFixture<FormularioJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
