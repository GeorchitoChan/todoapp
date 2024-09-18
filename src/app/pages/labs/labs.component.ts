import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ];
  name = 'Jorge';
  age = 23;
  disabled = true;
  img = 'http://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Jorge',
    age: 23,
    avatar: 'http://w3schools.com/howto/img_avatar.png'
  };

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    console.log(event);
  }
}
