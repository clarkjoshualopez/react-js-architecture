import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"
import { todoFirebase } from "../firebase/TodoFirebase"

class TodoDTO {
    id = 0
    title = ""
    isCompleted = false
}

const db = todoFirebase.firestore()

export class TodoRepositoryFirebaseImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        const todos: any[] = []
        await db
            .collection("todos")
            .get()
            .then((todo) => {
                todo.docs.forEach((doc) => {
                    todos.push({
                        id: doc.id,
                        title: doc.data().title,
                        isCompleted: doc.data().isCompleted,
                    })
                })
            })
            .catch(function (error) {
                console.error("Error ", error)
            })

        return todos.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.isCompleted))
    }

    async AddTodo(data: any) {
        await db
            .collection("todos")
            .add({
                title: data.title,
                isCompleted: false,
            })
            .then(() => {
                console.log("Todo Saved Successfully!")
            })
            .catch(function (error) {
                console.error("Error ", error)
            })
    }

    async DeleteTodo(data: any) {
        await db
            .collection("todos")
            .doc(data.id)
            .delete()
            .then(() => {
                console.log("Todo Deleted Successfully!")
            })
            .catch(function (error) {
                console.error("Error ", error)
            })
    }

    async UpdateTodo(data: any) {
        await db
            .collection("todos")
            .doc(data.id)
            .set(data)
            .then(() => {
                console.log("Todo Updated Successfully!")
            })
            .catch(function (error) {
                console.error("Error ", error)
            })
    }

    async IsCompleted(data: any) {
        await db
            .collection("todos")
            .doc(data.id)
            .update({
                isCompleted: !data.isCompleted,
            })
            .then(() => {
                console.log("Todo Updated Successfully!")
            })
            .catch(function (error) {
                console.error("Error ", error)
            })
    }
}
