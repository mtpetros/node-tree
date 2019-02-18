import React, { Component } from 'react'

import factoryContainer from 'Containers/factory'

import Input from 'Components/common/Input'
import Button from 'Components/common/Button'

const handleOnCancel = (setIsVisible) => {
  return () => setIsVisible(false)
}

class FactoryMenu extends Component {
  componentDidUpdate (prevProps) {
    const {
      createChildren,
      factory: {
        bottom,
        top,
        amount
      }
    } = this.props

    const shouldUpdate = bottom !== prevProps.factory.bottom ||
      top !== prevProps.factory.top ||
      amount !== prevProps.factory.amount

    if (shouldUpdate) {
      createChildren({ top, bottom, amount })
    }
  }

  render () {
    const {
      factory = {},
      setIsVisible,
      createFactory,
      setKey
    } = this.props

    const {
      name,
      bottom,
      top,
      amount
    } = factory

    const handleOnConfirm = (e) => {
      createFactory(factory)
      e.preventDefault()
    }

    return (
      <div className='factory-menu'>
        <Input
          label='factory name'
          type='text'
          name='name'
          value={name}
          setKey={setKey}
        />
        <Input
          label='range bottom'
          type='text'
          name='bottom'
          value={bottom}
          setKey={setKey}
        />
        <Input
          label='range top'
          type='text'
          name='top'
          value={top}
          setKey={setKey}
        />
        <Input
          label='number of children'
          type='text'
          name='amount'
          value={amount}
          setKey={setKey}
        />
        <div className='button-group'>
          <Button
            label='confirm'
            onClick={handleOnConfirm}
          />
          <Button
            label='cancel'
            onClick={handleOnCancel(setIsVisible)}
          />
        </div>
      </div>
    )
  }
}

const withFactory = factoryContainer(FactoryMenu)
export default withFactory
