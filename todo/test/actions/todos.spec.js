import expect from 'expect'
import * as actions from '../../actions'

describe('todo actions', () => {

  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('use redux')).toEqual({
      type: "ADD_TODO",
      id: 0,
      text: "use redux"
    })
  })

})
