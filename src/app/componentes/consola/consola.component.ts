import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styleUrls: ['./consola.component.css'],
})
export class ConsolaComponent implements OnInit {
  consolaFavorita: string = 'Sega Genesis';
  otraConsolaFavorita: string;

  constructor() {}

  ngOnInit(): void {}

  onCambioConsola(consolaNueva) {
    this.otraConsolaFavorita = consolaNueva;
  }
}
