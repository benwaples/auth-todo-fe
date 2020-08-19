import React, { Component } from 'react'
import DisplaySignIn from './SignIn.js'
import DisplaySignUp from './SignUp.js'
import { 
  signUp,
  signIn
 } from '../todo-api.js'

export default class AuthPage extends Component {

  state = {
    signIn: false,
    signUp: false,
    signInEmail: '',
    signInPassword: '',
    signUpEmail: '',
    signUpPassword: ''
  }

  handleSignUp = async (e) => {
    e.preventDefault();

    const userData = await signUp({
      email: this.state.signUpEmail,
      password: this.state.signUpPassword
    })

    console.log(userData);

    // this.props.handleToken(userData.body.token)
    // this.props.history.push('/')
  }

  displaySignIn = () => {
    this.setState({ signIn: true })
  }
  
  displaySignUp = () => {
    this.setState({ signUp: true })
  }

  handleSignUpEmail = (e) => {
    this.setState({ signUpEmail: e.target.value })
    console.log(this.state.signUpEmail)
  }
  
  handleSignUpPassword = (e) => {
    this.setState({ signUpPassword: e.target.value })
    console.log(this.state.signUpPassword)
  }

  render() {
    return (
      <div className="auth">
        <h2 onClick={this.displaySignIn}>Sign In</h2>
        <h2 onClick={this.displaySignUp}>Sign Up</h2>
        {
          this.state.signIn && <DisplaySignIn />
        }
        {
          this.state.signUp && <DisplaySignUp 
          handleSignUp={this.handleSignUp}
          handleSignUpEmail={this.handleSignUpEmail}
          handleSignUpPassword={this.handleSignUpPassword} />
        }
      </div>
    )
  }
}
