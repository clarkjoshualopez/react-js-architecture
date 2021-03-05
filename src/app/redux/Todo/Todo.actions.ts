import { TODO_LOAD_REQUEST, TODO_LOAD_SUCCESS, TODO_LOAD_FAILURE } from "./Todo.types"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"
import { TodoRepositoryImpl } from "../../../data/repositories/TodoRepositoryImpl"

export const refreshTodo = async (dispatch: any) => {
    dispatch({ type: TODO_LOAD_REQUEST })

    try {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.GetTodos()
        dispatch({ type: TODO_LOAD_SUCCESS, payload: todos })
    } catch (error) {
        dispatch({ type: TODO_LOAD_FAILURE, error })
    }
}

export const addTodo = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            const todos = await todoService.AddTodo(data)
            dispatch({ type: TODO_LOAD_SUCCESS, payload: todos })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}

export const deleteTodo = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            const todos = await todoService.DeleteTodo(data)
            dispatch({ type: TODO_LOAD_SUCCESS, payload: todos })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}

export const UpdateTodo = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            const todos = await todoService.UpdateTodo(data)
            dispatch({ type: TODO_LOAD_SUCCESS, payload: todos })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}

export const isCompleted = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            const todos = await todoService.IsCompleted(data)
            dispatch({ type: TODO_LOAD_SUCCESS, payload: todos })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}
