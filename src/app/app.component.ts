import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponent/todos/todos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [TodosComponent]
})
export class AppComponent {
  title = 'cwh-todo-list';
 constructor(){

 }
}
