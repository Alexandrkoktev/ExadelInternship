import React from 'react'
import { Button } from 'react-bootstrap'

class Message extends React.Component {

    render() {
        return (
            <Button variant="outline-info">
                <span className="oi oi-envelope-closed"
                    style={{ fontSize: '25px' }} />
            </Button>
        )
    }
}

export default Message