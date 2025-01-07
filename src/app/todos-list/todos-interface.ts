export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface todoCreate {
  id: number;
  userId: number;
  title: string;
  completed: boolean
}
