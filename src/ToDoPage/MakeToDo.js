import React, { Component } from 'react'

export default class MakeToDo extends Component {

  render() {
    const {
      newToDo,
      handleToDo
    } = this.props
 
    return (
      <form onSubmit={newToDo} className="center">
        <label>
          <p>Add A To Do:</p>
          <input onChange={handleToDo} />
        </label>
        <button>add</button>
      </form>
    )
  }
}
