import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Maria';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Marcela','Valentina'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  cambiarPersona() {
    this.nombre = 'Pedro';
    this.genero = 'masculino'
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Pedro',
    edad: 26,
    direccion: 'Valparaiso, Chile'
  }

  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //ASYNC Pipe
  miObservable = interval(4000); // 0,1,2,3,4,5,6,7,8

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve(' Tenemos data de promesa ')
    }, 3500);

  });

}
