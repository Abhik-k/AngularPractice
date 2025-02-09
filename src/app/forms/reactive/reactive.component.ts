import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  //FormControl - We will create instance of form elements in our TS. 

  studentForm : FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    userName: new FormControl(),
    isAcceptTerms: new FormControl(),

  })
}
