/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { 
  fetchList, 
  makeToDo,
  changeToDo,
  deleteTodo } from '../todo-api.js'
import MakeToDo from './MakeToDo.js'
import RenderCompleted from './RenderCompleted.js'
import RenderToDo from './RenderToDo.js'

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
      this.setState({ newToDo: ''})

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
          <h2>To Do:</h2>
          <ul>
            {
              this.state.isLoading ? 'loading' 
              :
              this.state.allToDos.map(toDo => {
                if(!toDo.completed){
                return <RenderToDo toDo={toDo} handleFinish={this.handleFinish} />
              }})
            }
          </ul>
        </section>
        <section>
          <h2>Finished</h2>
          <ul>
            {
                this.state.isLoading ? 'loading' 
                :
                this.state.allToDos.map(done => {
                  if(done.completed){
                  return <RenderCompleted todo={done} handleDelete={this.handleDelete} />
                }})
              }
          </ul>
        </section>
        <section>
          <h2>Add A To Do:</h2>
          <MakeToDo 
          newToDo={this.handleNewToDoSubmit}
          handleToDo={this.handleToDo}
          stateNewToDo={this.state.newToDo} />
        </section>
      </div>
    )
  }
}