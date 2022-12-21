import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
