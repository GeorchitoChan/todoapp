import { Component, signal } from '@angular/core';
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
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name = signal('Jorge');
  age = 23;
  disabled = true;
  img = 'http://w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'Jorge',
    age: 23,
    avatar: 'http://w3schools.com/howto/img_avatar.png'
  });

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.name.set(newvalue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newvalue)
      }
    });
  }
}
