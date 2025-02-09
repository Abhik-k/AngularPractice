import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj: any={
    firstName: '',
    lastName: '',
    userName:'',
    city:'',
    state: '',
    zipCode:'',
    isAcceptTerms: false
  }

  formValue: any ;

  onSubmit(){
    debugger;
    this.formValue = this.studentObj;
  }

  onReset(){
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName:'',
      city:'',
      state: '',
      zipCode:'',
      isAcceptTerms: false
    }
  }
}
