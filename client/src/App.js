import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import { connect } from 'react-redux'
import UsersList from './components/users/UsersList'
import UserShow from './components/users/UserShow'
import UserEdit from './components/users/UserEdit'


function App(props) {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/home" >Home </Link>
          <Link to="/users" >Users </Link>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users" component={UsersList} exact={true} />
          <Route path="/users/:user" component={UserShow} />
          <Route path="/users/edit/:user" component={UserEdit} exact={true} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}


export default connect()(App)

