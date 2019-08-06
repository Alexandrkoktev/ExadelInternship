import React from 'react'
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button'

class EditDate extends React.Component {
  render() {
    return (
      <Button variant="outline-info">
        <span className="oi oi-pencil" style={{ fontSize: '25px' }} />
      </Button>
    )
  }
}

export default EditDate
