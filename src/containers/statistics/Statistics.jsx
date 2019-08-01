import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/es/FormControl'
import ListOfUsersStatistics from '../../components/statistics/ListOfUsersStatistics'
import Table from 'react-bootstrap/Table'
import { mapStateToProps, mapDispatchToProps } from '../../commands/statistics'
import { connect } from 'react-redux'

class Statistics extends React.Component {
  componentDidMount() {
    this.props.requestStatistics()
  }

  render() {
    const { statistics } = this.props

    return (
      <>
        <InputGroup
          size="sm"
          className="mb-3"
          style={{ marginTop: '3%', width: '30%' }}
        >
          <FormControl
            aria-label="Small"
            placeholder="Search the person"
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              <span
                className="oi oi-magnifying-glass"
                onClick={event => {
                  event.preventDefault()
                }}
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
        <div className="table-responsive-sm">
          <Table striped bordered hover size="sm" style={{ margin: 'auto' }}>
            <thead>
              <tr>
                <th>
                  <span>name </span>
                  <span
                    className="oi oi-caret-bottom"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                  <span
                    className="oi oi-caret-top"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                </th>
                <th>
                  <span>driver rating </span>
                  <span
                    className="oi oi-caret-bottom"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                  <span
                    className="oi oi-caret-top"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                </th>
                <th>
                  <span> passenger rating </span>
                  <span
                    className="oi oi-caret-bottom"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                  <span
                    className="oi oi-caret-top"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                </th>
                <th>
                  <span>distance </span>
                  <span
                    className="oi oi-caret-bottom"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                  <span
                    className="oi oi-caret-top"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                </th>
                <th>
                  <span>amount of passengers </span>
                  <span
                    className="oi oi-caret-bottom"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                  <span
                    className="oi oi-caret-top"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                </th>
                <th>
                  <span>amount of bookings </span>
                  <span
                    className="oi oi-caret-bottom"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                  <span
                    className="oi oi-caret-top"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                </th>
                <th>
                  <span>amount of routes </span>
                  <span
                    className="oi oi-caret-bottom"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                  <span
                    className="oi oi-caret-top"
                    style={{ fontSize: '13px', marginLeft: 'auto' }}
                  />
                </th>
              </tr>
            </thead>
            <ListOfUsersStatistics statistics={statistics} />
          </Table>
        </div>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics)
