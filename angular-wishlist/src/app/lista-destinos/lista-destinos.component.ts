import { DestinosApiClient } from './../models/destinos-api-client.model';
import { DestinoViaje } from './../models/destino-viaje.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [ DestinosApiClient ]
})
export class ListaDestinosComponent implements OnInit {
  redesSociales: string[];
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];

  constructor(public destinosApiClient: DestinosApiClient) { 
    this.onItemAdded = new EventEmitter();
    this.redesSociales = ["Facebook", "Twitter", "Instagram"];
    this.updates = [];
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje)=>{
      if(d != null){
        this.updates.push('Se ha elegido a ' + d.nombre);
      }
  });
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(d: DestinoViaje) {
    this.destinosApiClient.elegir(d);
  }

}
