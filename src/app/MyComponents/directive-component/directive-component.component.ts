import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-directive-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './directive-component.component.html',
  styleUrl: './directive-component.component.css'
})
export class DirectiveComponentComponent {

  isDiv1Visible : boolean = true;
  isDiv2Visible : boolean = true;

  isActive: boolean = false;
  selectedCountry: string ='';
  
  cityArray: string[] = ['Pune','Delhi','Mumbai','Bangalore'];
  showDiv1(){
    this.isDiv1Visible = true;
  }

  hideDiv1(){
    this.isDiv1Visible = false;
  }

  num1: string=''
  num2: string=''
  toggleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }

}
