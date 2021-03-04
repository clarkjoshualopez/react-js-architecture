import { TODO_LOAD_REQUEST, TODO_LOAD_SUCCESS, TODO_LOAD_FAILURE, RefreshTodoListSuccess } from "./Todo.types"

const initialState = {
    loading: false,
    todos: [],
}

function todos(state = initialState, action: { type: string; payload: RefreshTodoListSuccess }) {
    switch (action.type) {
        case TODO_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case TODO_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case TODO_LOAD_SUCCESS:
            console.log("Todo Load Successfully", typeof action.payload)
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }

        default:
            return state
    }
}
export default todos
