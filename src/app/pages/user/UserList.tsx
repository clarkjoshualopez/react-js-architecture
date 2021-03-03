import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshUser } from "../../redux/User/User.actions"
import { UserProps, User } from "../../redux/User/User.types"

interface RootState {
    users: any
}

const UserList = ({ users }: UserProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshUser)
    }

    return (
        <div className="container">
            <div>
                <button style={{ float: "right" }} onClick={handleClick}>
                    Load User
                </button>
                <h1>User List</h1>
                <ul>
                    {Object.entries(users).length === 0 ? (
                        <li>No Users Found</li>
                    ) : (
                        users.map((user: User) => (
                            <li style={{ paddingBottom: "1rem" }} key={user.id}>
                                <span style={{ fontWeight: "bold" }}>First Name: </span>
                                {user.first_name} <br /> <span style={{ fontWeight: "bold" }}>Last Name: </span>
                                {user.last_name} <br /> <span style={{ fontWeight: "bold" }}>Email: </span>
                                {user.email}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log("Users state", state.users)
    return {
        users: state.users.users,
    }
}

export default connect(mapStateToProps)(UserList)
