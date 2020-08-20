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
          <input onChange={handleToDo} value={this.props.stateNewToDo}/>
        </label>
        <button>add</button>
      </form>
    )
  }
}
