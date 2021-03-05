import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export interface TodoService {
    GetTodos(): Promise<Todo[]>
}

export class TodoServiceImpl implements TodoService {
    todoRepo: TodoRepository

    constructor(tr: TodoRepository) {
        this.todoRepo = tr
    }

    async GetTodos(): Promise<Todo[]> {
        return this.todoRepo.GetTodos()
    }

    async AddTodo(data: any) {
        return this.todoRepo.AddTodo(data)
    }

    async DeleteTodo(data: any): Promise<any> {
        const statusIsCompleted = data.isCompleted

        if (statusIsCompleted) {
            throw alert("You can't delete this todo")
        }

        return this.todoRepo.DeleteTodo(data)
    }

    async UpdateTodo(data: any): Promise<any> {
        return this.todoRepo.UpdateTodo(data)
    }

    async IsCompleted(data: any): Promise<any> {
        return this.todoRepo.IsCompleted(data)
    }
}
