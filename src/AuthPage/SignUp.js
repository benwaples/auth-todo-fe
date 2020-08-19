import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    const {
      handleSignUp,
      handleSignUpEmail,
      handleSignUpPassword
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSignUp}>
          <label>
            Email
            <input type="email" onChange={handleSignUpEmail} />
          </label>
          <label>
            Password
            <input type="password" onChange={handleSignUpPassword} />
          </label>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}
