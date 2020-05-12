import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-juego',
  templateUrl: './formulario-juego.component.html',
  styleUrls: ['./formulario-juego.component.css'],
})
export class FormularioJuegoComponent {
  constructor(private fb: FormBuilder) {}

  juegoForm = this.fb.group({
    nombre: [''],
    plataforma: ['', Validators.required],
    consola: [''],
    especificaciones: this.fb.group({
      version: [''],
      genero: [''],
      fechaDeEmision: [''],
    }),
    juegos: this.fb.array([this.fb.control('')]),
  });

  get juegos() {
    return this.juegoForm.get('juegos') as FormArray;
  }

  agregarJuego() {
    this.juegos.push(this.fb.control(''));
  }

  submit() {
    debugger;
    this.juegoForm.value;
  }
}
