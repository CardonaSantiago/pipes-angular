import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas:boolean = true;
  OrdenarPor:string = '';

  heroes:Heroe[]=[
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'linternaverde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor:string){
    this.OrdenarPor = valor;
    
  }

}
