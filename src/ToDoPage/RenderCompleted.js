import React, { Component } from 'react'

export default class RenderCompleted extends Component {
  render() {

    const {
      toDo,
      handleDelete
    } = this.props

    return (
      <div>
        <li key={toDo.id} className="center">{toDo.todo}<p className="deleteButton" onClick={() => { handleDelete(toDo.id) } }>Delete!</p></li>
      </div>
    )
  }
}