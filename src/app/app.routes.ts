import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';

// Router Outlet is a directive which is responsible to render activated route components!
//Use router link instead of href -- example -- routerLink="todo-item"
//Task - Create a Navbar
export const routes: Routes = [
    {
        path: 'todo',
        component: TodosComponent
    },
    {
        path:'todo-item',
        component: TodoItemComponent
    }
];
