import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Juego } from './../clases/Juego';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit {
  @Input() consolaHijo: string;
  @Output() consolaHijoEvento = new EventEmitter<string>();

  nombreJuego: string;
  plataforma: string = 'Nintendo';
  verJuegos: boolean = true;

  imagenJuego: string =
    'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros.jpg';
  anchoImg = '500';
  altoImg = '200';
  tooltip = 'Super Mario Bross';

  juego: Juego = {
    nombre: 'Mario Bross',
    plataforma: 'Nintendo',
    consola: true,
    version: 2,
    genero: 'Arcade',
  };

  juego1: Juego[] = [
    {
      nombre: 'Counter Strike',
      plataforma: 'Steam',
      consola: false,
      version: 1.6,
      genero: 'Shoter',
    },
    {
      nombre: 'World of Warcraft',
      plataforma: 'Battle.net',
      consola: false,
      version: 1.17,
      genero: 'Aventura',
    },
    {
      nombre: 'Zelda',
      plataforma: 'Nintendo',
      consola: true,
      version: 1,
      genero: 'Aventura',
    },
  ];

  juegos: any[] = ['Age Of Empire', 'Crash Bandicoot', 'Grim Fandango'];

  constructor() {
    this.nombreJuego = 'Super Mario Bross';
  }

  ngOnInit(): void {}

  verJuego(juego: any) {
    alert('Juego: ' + juego);
  }

  cambioConsola() {
    this.consolaHijoEvento.emit('Nintendo 64');
  }
}
