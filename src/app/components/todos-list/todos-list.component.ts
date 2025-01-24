import { ChangeDetectionStrategy, Component, inject, Inject } from "@angular/core";
import { TodosApiService } from "../../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { AsyncPipe, NgFor } from "@angular/common";
import { Todo } from "../../interfaces/todos.interface";
import { TodosService } from "../../todos.service";

@Component({
    selector: 'app-todos',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [TodoCardComponent, NgFor, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
    readonly todosApiservice = inject(TodosApiService);
    readonly todosService = inject(TodosService);

    todos = this.todosService.todos
        
    
        constructor() {
            this.todosApiservice.getTodos().subscribe(
                (respons: any) => {
                    // this.todos = respons
                    this.todosService.setTodos(respons)
                }
            )
        }

    
    
    
        deleteTodo(id: number) {
            
            this.todosService.deleteTodo(id)
            this.todos = this.todosService.todos
            // this.todos = this.todos.filter(
            //     ( todo: { id: any; }) => {
            //         if (id === todo.id) {
            //             return false
            //         } else {
            //             return true;
            //         }
    
    
            //      }
    
            // )
    
        }
}
    
