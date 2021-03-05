import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    id = 0
    title = ""
    isCompleted = false
}

const LOCALSTORAGE_NAME = "Todos"

export class TodoRepositoryLocalStorageImpl implements TodoRepository {
    getLocalStorage(name: string) {
        const todos = JSON.parse(<string>localStorage.getItem(name))
            ? JSON.parse(<string>localStorage.getItem(name))
            : []

        return todos
    }

    setLocalStorage(name: string, value: any) {
        return localStorage.setItem(name, value)
    }

    async GetTodos(): Promise<Todo[]> {
        const todos = this.getLocalStorage(LOCALSTORAGE_NAME)

        return todos.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.isCompleted))
    }

    async AddTodo(data: any) {
        const todos = this.getLocalStorage(LOCALSTORAGE_NAME)

        todos.push(data)
        this.setLocalStorage(LOCALSTORAGE_NAME, JSON.stringify(todos))

        return this.GetTodos
    }

    async DeleteTodo(data: any) {
        const todos = this.getLocalStorage(LOCALSTORAGE_NAME)

        const deleteTodo = todos
            .map((todo: TodoDTO) => {
                return todo.id
            })
            .indexOf(data.id)
        todos.splice(deleteTodo, 1)
        this.setLocalStorage(LOCALSTORAGE_NAME, JSON.stringify(todos))

        return this.GetTodos
    }

    async UpdateTodo(data: any) {
        const todos = this.getLocalStorage(LOCALSTORAGE_NAME)

        const todoId = todos.findIndex((todo: TodoDTO) => {
            return todo.id === data.id
        })
        todos[todoId].title = data.title
        this.setLocalStorage(LOCALSTORAGE_NAME, JSON.stringify(todos))

        return this.GetTodos
    }

    async IsCompleted(data: any) {
        const todos = this.getLocalStorage(LOCALSTORAGE_NAME)

        const todoId = todos.findIndex((todo: TodoDTO) => {
            return todo.id === data.id
        })
        todos[todoId].isCompleted = !data.isCompleted
        this.setLocalStorage(LOCALSTORAGE_NAME, JSON.stringify(todos))

        return this.GetTodos
    }
}
