import React from "react"

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">React Redux Typescript</a>
                <ul className="right">
                    <li>
                        <a href="/lists">Lists</a>
                    </li>
                    <li>
                        <a href="/users">Users</a>
                    </li>
                    <li>
                        <a href="/todos">Todos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
