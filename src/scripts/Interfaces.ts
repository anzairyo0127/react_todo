import * as E from "./Enums"

export interface Todo {
  id: number;
  text: string;
  status: E.TodoStatus;
}

export interface State {
  todos: Todo[];
  visibilityFilter: E.VisualFilter;
}
