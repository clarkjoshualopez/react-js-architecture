import { TODO_LOAD_REQUEST, TODO_LOAD_SUCCESS, TODO_LOAD_FAILURE } from "./Todo.types"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"
// import { TodoRepositoryMemoryImpl } from "../../../data/repositories/TodoRepositoryMemoryImpl"
// import { TodoRepositoryLocalStorageImpl } from "../../../data/repositories/TodoRepositoryLocalStorageImpl"
import { TodoRepositoryFirebaseImpl } from "../../../data/repositories/TodoRepositoryFirebaseImpl"

export const refreshTodo = async (dispatch: any) => {
    dispatch({ type: TODO_LOAD_REQUEST })

    try {
        const todoRepo = new TodoRepositoryFirebaseImpl()
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
            const todoRepo = new TodoRepositoryFirebaseImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.AddTodo(data).then(() => {
                dispatch(refreshTodo)
            })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}

export const deleteTodo = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryFirebaseImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.DeleteTodo(data).then(() => {
                dispatch(refreshTodo)
            })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}

export const UpdateTodo = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryFirebaseImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.UpdateTodo(data).then(() => {
                dispatch(refreshTodo)
            })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}

export const isCompleted = (data: any) => {
    return async function (dispatch: any) {
        try {
            const todoRepo = new TodoRepositoryFirebaseImpl()
            const todoService = new TodoServiceImpl(todoRepo)
            await todoService.IsCompleted(data).then(() => {
                dispatch(refreshTodo)
            })
        } catch (error) {
            dispatch({ type: TODO_LOAD_FAILURE, error })
        }
    }
}
