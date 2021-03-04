import React from "react"
import Navbar from "./components/Navbar"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ItemList from "./pages/item/ItemList"
import UserList from "./pages/user/UserList"
import TodoList from "./pages/todo/TodoList"

const RouteManager = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/lists" component={ItemList} />
                <Route exact path="/users" component={UserList} />
                <Route exact path="/todos" component={TodoList} />
                <Redirect from="*" to="/lists" />
            </Switch>
        </Router>
    )
}

export default RouteManager
