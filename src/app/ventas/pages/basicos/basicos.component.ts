import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower:string ="santiago";
  nombreUpper:string = "SANTIAGO";
  nombreCompleto:string = "SaNtIAgo cARdoNA";

  fecha: Date = new Date(); //dia de hoy

}
