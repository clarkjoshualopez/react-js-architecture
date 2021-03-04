import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshTodo, addTodo, deleteTodo, UpdateTodo, isCompleted } from "../../redux/Todo/Todo.actions"
import { TodoProps, Todo } from "../../redux/Todo/Todo.types"
import Swal, { SweetAlertOptions } from "sweetalert2"

interface RootState {
    todos: any
}

const TodoList = ({ todos }: TodoProps) => {
    const dispatch = useDispatch()
    const newTodo = {
        id: 0,
        title: "",
        isCompleted: false,
    }

    const handleRefresh = () => {
        dispatch(refreshTodo)
    }

    const handleAddTodo = (data: any) => {
        dispatch(addTodo(data))
    }

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id))
        dispatch(refreshTodo)
    }

    const handleEditTodo = (data: any) => {
        Swal.fire({
            title: "Update Todo",
            input: "text",
            inputValue: data.title,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!"
                }
            },
        } as SweetAlertOptions).then((result) => {
            if (result.value) {
                console.log(result)
                newTodo.id = data.id
                newTodo.title = result.value
                console.log("upcomming data", newTodo, "inputed data", data)
                dispatch(UpdateTodo(newTodo))
                dispatch(refreshTodo)
            }
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (newTodo.title != "") {
            const lastTodosId = Object.entries(todos).length === 0 ? Math.random() : todos.slice(-1)[0].id + 1
            newTodo.id = lastTodosId
            handleAddTodo(newTodo)
            dispatch(refreshTodo)
            e.target.children[1].value = ""
        } else {
            Swal.fire("Please input a todo title")
        }
    }

    const handleChange = (e: any) => {
        newTodo.title = e.target.value
    }

    const handleChecked = (data: any) => {
        dispatch(isCompleted(data))
        dispatch(refreshTodo)
    }

    const todoList =
        Object.entries(todos).length === 0 ? (
            <div className="collection-item">
                <span>No Todos Found</span>
            </div>
        ) : (
            todos.map((todo: Todo) => (
                <div className="collection-item" key={todo.id}>
                    <a
                        className={`btn-floating
                        ${todo.isCompleted ? "green" : "red"}`}
                        style={{ marginRight: "10px" }}
                        onClick={() => handleChecked(todo)}
                    >
                        {todo.isCompleted ? (
                            <i className="material-icons">done</i>
                        ) : (
                            <i className="material-icons">close</i>
                        )}
                    </a>
                    <span className={`${todo.isCompleted ? "green-text text-lighten-1" : ""}`}>{todo.title}</span>
                    <div className="right">
                        <a className="btn-flat" onClick={() => handleEditTodo(todo)}>
                            Edit
                        </a>
                        <a className="btn-flat red-text" onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </a>
                    </div>
                </div>
            ))
        )

    return (
        <div className="todo-app container">
            <h1 className="center blue-text">Todo List</h1>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <a className="waves-effect waves-light btn" style={{ textAlign: "right" }} onClick={handleRefresh}>
                    <i className="material-icons left">sync</i>
                    Load Todo
                </a>
            </div>
            <div className="todos collection">{todoList}</div>
            <div>
                <form id="formID" onSubmit={handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" id="inpt" onChange={handleChange} />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log("Todos state", state.todos, state)
    return {
        todos: state.todos.todos,
    }
}

export default connect(mapStateToProps)(TodoList)
