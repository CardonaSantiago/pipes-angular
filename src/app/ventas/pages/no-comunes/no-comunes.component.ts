import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nselect
  nombre:string = "santiago";
  genero:string= 'masculino';

  invitacion={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  };

  //i18nplural

  clientes: string[]=['Maria','pedro','juan','carla','camila'];
  clientesMap={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = "maria";
    this.genero= 'femenino';
  }

  borrarCliente(){
    this.clientes.splice(0,1);

  }

  //keyvalue pipe

  persona={
    nombre:'santiago',
    edad:26,
    direccion: 'pereira, risaralda'

  }

  //json pipe
  heroes=[
    {
      nombre:'superman',
      vuela:true
    }, 
    {
      nombre:'robin',
      vuela:false
    },
    {
      nombre:'aquaman',
      vuela:false
    }
  ]

  //async pipe

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('tenemos data de promesa')
    },3500);
  })

}
