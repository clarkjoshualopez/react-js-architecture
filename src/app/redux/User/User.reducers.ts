import { USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILURE, RefreshUserListSuccess } from "./User.types"

const initialState = {
    loading: false,
    users: [],
}

function users(state = initialState, action: { type: string; payload: RefreshUserListSuccess }) {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case USER_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case USER_LOAD_SUCCESS:
            console.log("Users Load Successfully", typeof action.payload)
            return {
                ...state,
                users: action.payload,
                loading: false,
            }

        default:
            return state
    }
}
export default users
