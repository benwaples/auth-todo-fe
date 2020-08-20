import React, { Component } from 'react'
import { 
  fetchList, 
  makeToDo,
  changeToDo,
  deleteTodo } from '../todo-api.js'
import MakeToDo from './MakeToDo.js'
import RenderCompleted from './RenderCompleted.js'

export default class ToDoPage extends Component {

  state = {
    allToDos: [],
    newTodo: '',
    isLoading: false,
    changeToDoId: 0,
    changeToDo: '',
  }

  componentDidMount = async () => {
    if (!this.props.checkState()){
       this.props.history.push('/auth')
    } else {
    this.setState({ isLoading: true})
    const data = await fetchList()

    this.setState({ allToDos: data.body })
    console.log(data.body, 'all to do')

    this.setState({ isLoading: false})
    }
  }

  handleNewToDoSubmit = async (e) => {
    e.preventDefault()

    try { 
      await makeToDo({todo: this.state.newToDo})
      this.setState()

      const data = await fetchList()
      this.setState({ allToDos: data.body })

    } catch(e) {
      console.log(e.message)
    }
  }

  handleToDo = (e) => {
    this.setState({ newToDo: e.target.value })
  }

  handleFinish = async (todo) => {
    await this.setState({ 
      changeToDo: todo.todo,
      changeToDoId: todo.id })
    await changeToDo({
      todo: this.state.changeToDo,
      toDoId: this.state.changeToDoId,
      completed: true
    })

    const data = await fetchList()
    this.setState({ allToDos: data.body })
  }

  handleDelete = async (todoId) => {
    await this.setState({ changeToDoId: todoId})
    await deleteTodo({
      id: this.state.changeToDoId
    })

    const data = await fetchList()
    this.setState({ allToDos: data.body })
  }

  render() {
    return (
      <div className="toDoList">
        <section>
          <ul>
          {
            this.state.isLoading ? 'loading' 
            :
            this.state.allToDos.map(toDo => {
              if(!toDo.completed){
              return <li key={toDo.id} className="center">{toDo.todo}<p className="doneButton" onClick={() => {this.handleFinish(toDo)}} >Done!</p></li>
            }})
          }
          </ul>
        </section>
        <section>
        {
            this.state.isLoading ? 'loading' 
            :
            this.state.allToDos.map(toDo => {
              if(toDo.completed){
              return <RenderCompleted toDo={toDo} handleDelete={this.handleDelete} />
            }})
          }
        </section>
        <section>
          <MakeToDo 
          newToDo={this.handleNewToDoSubmit}
          handleToDo={this.handleToDo} />
        </section>
      </div>
    )
  }
}