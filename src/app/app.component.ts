import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { DirectiveComponentComponent } from "./MyComponents/directive-component/directive-component.component";
import { TemplateComponent } from "./forms/template/template.component";

@Component({
  selector: 'app-root',
  imports: [TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_app';
  // constructor(){
  //   setTimeout(() => {
  //     this.title = "New Title";
  //   }, 2000);
  // }
}
