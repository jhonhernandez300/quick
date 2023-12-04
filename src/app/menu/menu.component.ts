import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  myForm!: FormGroup;    
  submitted = false;    
  message: string = '';
    
  constructor(private formBuilder: FormBuilder, private router: Router) { }  

  iniciarFormulario(){
    this.myForm = this.formBuilder.group({              
      inputVideo: ['']      
    });
}

  ngOnInit(): void {    
    this.iniciarFormulario();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  } 

  onKeypressEvent(event: any){
    console.log(event.target.value);
    this.message = event.target.value; 
 }

/*  sendit(data: any){
  console.log("Value", data.target.value)
  this.message = data.target.value; 
} */

  onSubmit() {
    this.submitted = true; 
    //console.log("menu component", this.myForm.value);   
    //this.kamehamehaGoku = this.myForm.value;
    //this.message = this.myForm.get('video')?.value;
    //console.log("message", this.message); 
  }
}
