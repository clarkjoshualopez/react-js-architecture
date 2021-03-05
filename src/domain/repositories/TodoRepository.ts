import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    AddTodo(data: any):any
    DeleteTodo(data: any):any
    UpdateTodo(data: any):any
    IsCompleted(data: any):any
}
