import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const TodoList = connect(mapStateToProps, null)(({ todos }) =>
  <ul>
    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
  </ul>
)

export default TodoList
