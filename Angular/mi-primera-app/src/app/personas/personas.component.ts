import {Component} from '@angular/core';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
  //property binding pasar valor a una propiedad
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = 'Licenciado';
  mostrar = false;
  //event binding reacciona ante un evento
  agregarPersona(){
     this.mensaje = 'Persona agregada';
     this.mostrar = true;
  }

  // modificarTitulo(event:Event){
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }
}