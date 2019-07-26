import React from 'react'
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button'

class DeleteButton extends React.Component {
  render() {
    return (
      <div className="edit-date">
        <Button variant="light"><span className="oi oi-trash"/></Button>
      </div>
    )
  }
}

export default DeleteButton
