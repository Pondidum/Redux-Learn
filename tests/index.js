var deepFreeze = require("deep-freeze");
var expect = require("expect");

import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};







const testAddTodo = () => {

  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: "Learn Redux"
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);

};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'learn redux',
      completed: false,
    },
    {
      id: 1,
      text: 'go to the gym',
      completed: false,
    }
  ];
  const action = {
    type: "TOGGLE_TODO",
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'learn redux',
      completed: false,
    },
    {
      id: 1,
      text: 'go to the gym',
      completed: true,
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};



testAddTodo();
testToggleTodo();

console.log("");
console.log("Tests Passed!")
