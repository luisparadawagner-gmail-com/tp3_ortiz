import { Component, OnInit } from '@angular/core';
import { Juego } from './../clases/Juego';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit {
  nombreJuego: string;
  plataforma: string = 'Nintendo';

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

  constructor() {
    this.nombreJuego = 'Super Mario Bross';
  }

  ngOnInit(): void {}

  verJuego(juego: any) {
    alert('Juego: ' + juego);
  }
}
