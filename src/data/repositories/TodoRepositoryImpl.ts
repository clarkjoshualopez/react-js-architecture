import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    id = 0
    title = ""
    isCompleted = false
}

const todoJsonData = [
    { id: 1, title: "work work work", isCompleted: true },
    { id: 2, title: "code code code", isCompleted: false },
]

export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return todoJsonData.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.isCompleted))
    }

    async AddTodo(data: any) {
        todoJsonData.push(data)

        return todoJsonData
    }

    async DeleteTodo(data: any) {
        const deleteTodo = todoJsonData
            .map((todo) => {
                return todo.id
            })
            .indexOf(data.id)
        todoJsonData.splice(deleteTodo, 1)

        return todoJsonData
    }

    async UpdateTodo(data: any) {
        const todoId = todoJsonData.findIndex((todo: TodoDTO) => {
            return todo.id === data.id
        })
        todoJsonData[todoId].title = data.title
        return todoJsonData
    }

    async IsCompleted(data: any) {
        const todoId = todoJsonData.findIndex((todo: TodoDTO) => {
            return todo.id === data.id
        })
        todoJsonData[todoId].isCompleted = !data.isCompleted

        return todoJsonData
    }
}
