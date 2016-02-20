import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/todo'
import { toggleTodo } from '../actions'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const component = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={ () => onTodoClick(todo.id) }
      />)}
  </ul>
)

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

export default TodoList
