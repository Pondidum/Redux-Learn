import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Counter from '../../components/counter'

function setup(value = 0) {
  const actions = {
    onIncrement: expect.createSpy(),
    onDecrement: expect.createSpy()
  }

  const component = TestUtils.renderIntoDocument(
    <Counter value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button'),
    p: TestUtils.findRenderedDOMComponentWithTag(component, 'p')
  }
}

describe('Counter component', () => {

  it('should display count', () => {
    const { p } = setup()
    expect(p.textContent).toMatch(/^Clicked: 0 times/);
  })

  it('first button should call onIncrement', () => {
    const { buttons, actions } = setup()
    TestUtils.Simulate.click(buttons[0])
    expect(actions.onIncrement).toHaveBeenCalled()
  })

  it('second button should call onDecrement', () => {
    const { buttons, actions } = setup()
    TestUtils.Simulate.click(buttons[1])
    expect(actions.onDecrement).toHaveBeenCalled()
  })

})
