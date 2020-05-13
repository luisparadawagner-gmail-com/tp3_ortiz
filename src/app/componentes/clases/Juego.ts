export class Juego {
  constructor(
    public nombre: string,
    public plataforma: string,
    public consola: boolean,
    public version: number,
    public genero: string,
    public fechaDeEmision?: Date
  ) {}
}
