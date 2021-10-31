import { DestinoViaje } from './../models/destino-viaje.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  redesSociales: string[];

  constructor() { 
    this.destinos = [];
    this.redesSociales = ["Facebook", "Twitter", "Instagram"];
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViaje(nombre, url))
    console.log(this.destinos);
    return false
  }

}
