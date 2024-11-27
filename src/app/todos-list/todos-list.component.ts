import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";
import { Todo } from "../interfaces/todo-interface";
import { TodosApiService } from "../services/todos-api.service";
import { Store } from "@ngrx/store";
import { selectTodos } from "./store/todo.selector";
import { TodosActions } from "./store/todo.actions";

@Component ({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodosCardComponent,AsyncPipe,CreateTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
  readonly todosApiService = inject (TodosApiService);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos)

  ngOnInit() {
    this.loadTodos();
  }
   
  private loadTodos() {
    this.todosApiService.getTodos().subscribe((response: Todo[]) => {
      this.store.dispatch(TodosActions.set({ todos: response }));
    });
  }

  DeleteTodo(id:number) {
    this.store.dispatch(TodosActions.delete({id}));
  }

  editTodo (todo: Todo) {
    this.store.dispatch(TodosActions.edit({todo}));
  }

  public CreateTodo (formData: Todo) {
    const newTodo: Todo = {
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    }
    this.store.dispatch(TodosActions.create({todo: newTodo}))
  }
}