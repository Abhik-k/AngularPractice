import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [];
  constructor(){
    this.todos=[
      {sno:1,
      title:"Work1",
      desc:"This is TodoWork1",
      active:true},
      {sno:2,
        title:"Work2",
        desc:"This is TodoWork2",
        active:true},
        {sno:3,
          title:"Work3",
          desc:"This is TodoWork3",
          active:true}
    ]
  }
}
