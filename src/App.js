import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage/AuthPage.js' 
import HomePage from './HomePage/HomePage.js' 
import ToDoPage from './ToDoPage/ToDoPage.js' 

export default class App extends Component {

  state ={
    token: localStorage.getItem('TOKEN')
  }

  handleAuth = (token) => {
    this.setState({ token: token})

    localStorage.setItem('TOKEN', token)

    console.log(this.state.token);
  }

  handleSignOut = () => {
    this.setState({ token: ''});

    localStorage.setItem( 'TOKEN', '')
  }

  render() {
    return (
      <div>
      <Router>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <HomePage {...routerProps} />} 
              />
              <Route 
                  path="/auth" 
                  exact
                  render={(routerProps) => <AuthPage auth={this.handleAuth} {...routerProps} />} 
              />
              <Route 
                  path="/list" 
                  exact
                  render={(routerProps) => <ToDoPage token={this.state.token} {...routerProps} />} 
              />
          </Switch>
      </Router>
  </div>
    )
  }
}

