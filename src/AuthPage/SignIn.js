import React, { Component } from 'react'

export default class SignIn extends Component {
  render() {
      const {
        handleSignIn,
        handleSignInEmail,
        handleSignInPassword
      } = this.props;

    return (
      <div>
        <form onSubmit={handleSignIn}>
          <label>
            Email
            <input type="email" onChange={handleSignInEmail} />
          </label>
          <label>
            Password
            <input type="password" onChange={handleSignInPassword} />
          </label>
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}
