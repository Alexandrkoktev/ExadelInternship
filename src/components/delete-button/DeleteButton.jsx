import React from 'react'
import Button from 'react-bootstrap/Button'

class DeleteButton extends React.Component {
  render() {
    const { click } = this.props

    return (
      <div class="edit-date">
        <Button
          variant="light"
          onClick={() => {
            click('123')
          }}
        >
          delete
        </Button>
      </div>
    )
  }
}

export default DeleteButton
