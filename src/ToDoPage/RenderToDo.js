import React, { Component } from 'react'

export default class RenderToDo extends Component {
  render() {

    const {
      toDo,
      handleFinish
    } = this.props

    return (
      <li key={toDo.id} className="center">
        {toDo.todo}
        <p className="doneButton" onClick={() => { handleFinish(toDo) } }>Done!</p>
      </li>
    )
  }
}
