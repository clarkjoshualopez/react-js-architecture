import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"
import Swal from "sweetalert2"

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

    async AddTodo(data: Todo): Promise<any> {
        return this.todoRepo.AddTodo(data)
    }

    async DeleteTodo(data: Todo): Promise<any> {
        const statusIsCompleted = data.isCompleted

        if (statusIsCompleted) {
            throw Swal.fire("You can't delete this todo")
        }

        return this.todoRepo.DeleteTodo(data)
    }

    async UpdateTodo(data: Todo): Promise<any> {
        return this.todoRepo.UpdateTodo(data)
    }

    async IsCompleted(data: Todo): Promise<any> {
        return this.todoRepo.IsCompleted(data)
    }
}
