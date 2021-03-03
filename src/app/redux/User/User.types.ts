export const USER_LOAD_REQUEST = "USER_LOAD_REQUEST"
export const USER_LOAD_SUCCESS = "USER_LOAD_SUCCESS"
export const USER_LOAD_FAILURE = "USER_LOAD_FAILURE"

export type UserProps = {
    users: User[]
    refreshUser: () => User[]
}

export type UserActionType = RefreshUserListSuccess

export interface RefreshUserListSuccess {
    type: typeof USER_LOAD_SUCCESS
    payload: User[]
}

export interface User {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
}
