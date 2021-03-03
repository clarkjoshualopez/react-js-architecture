import { USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILURE } from "./User.types"
import { UserServiceImpl } from "../../../domain/usecases/UserService"
import { UserRepositoryImpl } from "../../../data/repositories/UserRepositoryImpl"

export const refreshUser = async (dispatch: any) => {
    dispatch({ type: USER_LOAD_REQUEST })

    try {
        const userRepo = new UserRepositoryImpl()
        const userService = new UserServiceImpl(userRepo)
        const users = await userService.GetUsers()
        dispatch({ type: USER_LOAD_SUCCESS, payload: users })
    } catch (error) {
        dispatch({ type: USER_LOAD_FAILURE, error })
    }
}
