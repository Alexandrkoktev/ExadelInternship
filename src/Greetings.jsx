import React from 'react'

class Greetings extends React.Component {
  render() {
    const { name } = this.props

    return <div>Hello, {name}</div>
  }
}

export default Greetings
