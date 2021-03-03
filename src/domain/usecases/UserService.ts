import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"

export interface UserService {
    GetUsers(): Promise<User[]>
}

export class UserServiceImpl implements UserService {
    userRepo: UserRepository

    constructor(ur: UserRepository) {
        this.userRepo = ur
    }

    async GetUsers(): Promise<User[]> {
        return this.userRepo.GetUsers()
    }
}
