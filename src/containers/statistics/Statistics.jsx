import React from 'react'
// eslint-disable-next-line no-unused-vars
import InputGroup from 'react-bootstrap/InputGroup'
// eslint-disable-next-line no-unused-vars
import FormControl from 'react-bootstrap/es/FormControl'
// eslint-disable-next-line no-unused-vars
import ListOfUsersStatistics from '../../components/statistics/ListOfUsersStatistics'
// eslint-disable-next-line no-unused-vars
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
          className="mb-3 forInputGroup"
        >
          <FormControl
            aria-label="Small"
            placeholder="Search the person"
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
        <Table
          striped
          bordered
          hover
          size="sm"
          className='forTable'
        >
          <thead>
            <tr>
              <th>
                <span>name </span>
                <span
                  className="oi oi-caret-bottom icon"
                />
                <span
                  className="oi oi-caret-top icon"
                />
              </th>
              <th>
                <span>driver rating </span>
                <span
                  className="oi oi-caret-bottom icon"
                />
                <span
                  className="oi oi-caret-top icon"
                />
              </th>
              <th>
                <span> passenger rating </span>
                <span
                  className="oi oi-caret-bottom icon"
                />
                <span
                  className="oi oi-caret-top icon"
                />
              </th>
              <th>
                <span>distance </span>
                <span
                  className="oi oi-caret-bottom icon"
                />
                <span
                  className="oi oi-caret-top icon"
                />
              </th>
              <th>
                <span>amount of passengers </span>
                <span
                  className="oi oi-caret-bottom icon"
                />
                <span
                  className="oi oi-caret-top icon"
                />
              </th>
              <th>
                <span>amount of bookings </span>
                <span
                  className="oi oi-caret-bottom icon"
                />
                <span
                  className="oi oi-caret-top icon"
                />
              </th>
              <th>
                <span>amount of routes </span>
                <span
                  className="oi oi-caret-bottom icon"
                />
                <span
                  className="oi oi-caret-top icon"
                />
              </th>
            </tr>
          </thead>
          <ListOfUsersStatistics statistics={statistics} />
        </Table>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics)
