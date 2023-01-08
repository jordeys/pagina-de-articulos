import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit{
  [x: string]: any;
  form!: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private router: Router) {
  }  

  ngOnInit(){
    
    this.form = this['formBuilder'].group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5),
      Validators.pattern(this.emailPattern)]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required]],
      // Number: ['',[Validators.required]],
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    }); 
  }
  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
    const value = this.form.value;
    console.log(value);
  }
  else{
    this.form.markAllAsTouched();
  }
 }
 navegacion(){
  this.router.navigate(['carrito'])
  }
}

