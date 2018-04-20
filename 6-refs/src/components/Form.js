import React, { Component } from 'react'

export default class Form extends Component {

  third = React.createRef()

  componentDidMount = () => {
    this.refs.first.value = 'first'
    this.second.value = 'second'
    this.third.current.value = 'third'
  }

  handleSubmitForm = e => {
    e.preventDefault();

    console.log('1 -> ', this.refs.first.value)
    console.log('2 -> ', this.second.value)
    console.log('3 -> ', this.third.current.value)
  }

  render() {
    return (
      <div>        
        My Form is here!
        <form onSubmit={this.handleSubmitForm}>
          <input type="text" ref="first" />
          <input type="text" ref={ input => this.second = input } />
          <input type="text" ref={ this.third } />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}