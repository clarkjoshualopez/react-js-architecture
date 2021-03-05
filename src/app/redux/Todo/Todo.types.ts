export const TODO_LOAD_REQUEST = "TODO_LOAD_REQUEST"
export const TODO_LOAD_SUCCESS = "TODO_LOAD_SUCCESS"
export const TODO_LOAD_FAILURE = "TODO_LOAD_FAILURE"

export type TodoProps = {
    todos: Todo[]
    refreshTodo: () => Todo[]
}

export type TodoActionType = RefreshTodoListSuccess

export interface RefreshTodoListSuccess {
    type: typeof TODO_LOAD_SUCCESS
    payload: Todo[]
}

export interface Todo {
    id: any
    title: string
    isCompleted: boolean
}
