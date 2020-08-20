import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Login to see your to do list</h1>
        <Link to='/auth'><p>Login</p></Link>
      </div>
    )
  }
}
