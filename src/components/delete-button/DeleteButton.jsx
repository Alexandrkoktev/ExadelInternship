import React from 'react'
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button'

class DeleteButton extends React.Component {
  render() {
//    const { click } = this.props
    return (
      <div className="edit-date">
        <Button variant="light">delete</Button>
      </div>
    )
  }
}

export default DeleteButton
