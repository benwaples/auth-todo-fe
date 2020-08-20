import React, { Component } from 'react'

export default class RenderCompleted extends Component {
  render() {

    const {
      todo,
      handleDelete
    } = this.props

    return (
      <div>
        <li key={todo.id} className="center">{todo.todo}<p className="deleteButton" onClick={() => { handleDelete(todo.id) } }>Delete!</p></li>
      </div>
    )
  }
}