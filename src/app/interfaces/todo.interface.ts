export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoForm {
  todoAuthor: number;
  id: number;
  todoName: string;
  todoCompleted: boolean;
}
