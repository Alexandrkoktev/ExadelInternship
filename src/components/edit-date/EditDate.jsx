import React from 'react'
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button'

class EditDate extends React.Component {
  render() {
    return (
      <div className="edit-date">
        <Button variant="light">
          <span className="oi oi-wrench" />
        </Button>
      </div>
    )
  }
}

export default EditDate
