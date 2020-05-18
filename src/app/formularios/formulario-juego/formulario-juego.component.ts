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
      fechaDeCompra: [''],
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

    this.juegoForm.setValue({
      nombre: 'Cs Go',
      plataforma: 'Steam',
      consola: '',
      especificaciones: {
        version: '1',
        genero: 'Shooter',
        fechaDeCompra: new Date(),
      },
      juegos: this.juegos.value,
    });

    this.juegoForm.patchValue({ plataforma: 'Origin' });
  }
}
