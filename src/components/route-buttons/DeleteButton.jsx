import React from 'react'
import Button from 'react-bootstrap/Button'
import Confirm from '../list-components/Confirm'


class DeleteButton extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  deny = () => { this.setState({ show: false }) }

  confirm = () => {
    this.props.click(this.props.id)
  }

  render() {
    return (
      <>
        <Button variant="outline-info" onClick={() => { this.setState({ show: true }) }}>
          <span className="oi oi-trash" style={{ fontSize: '25px' }} />
        </Button>
        <Confirm confirm={this.confirm.bind(this)} deny={this.deny.bind(this)} show={this.state.show} />
      </>
    )
  }
}

export default DeleteButton
