import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/es/FormControl'
import ListOfUsersStatistics from '../../components/statistics/ListOfUsersStatistics'
import Table from 'react-bootstrap/Table'
import { mapStateToProps, mapDispatchToProps } from '../../commands/statistics'
import { connect } from 'react-redux'
import './statistics.sass'

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
          className="mb-3 search"
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
              <th className='titles name'>
                <span>name </span>
                <span className='wrap'>
                  <span
                    className="oi oi-caret-bottom arrows"
                  />
                  <span
                    className="oi oi-caret-top arrows"
                  /></span>
              </th>
              <th className='titles amount'>
                <span>driver rating </span>
                <span className='wrap'>
                  <span
                    className="oi oi-caret-bottom arrows"
                  />
                  <span
                    className="oi oi-caret-top arrows"
                  /></span>
              </th>
              <th className='titles amount'>
                <span> passenger rating </span>
                <span className='wrap'>
                  <span
                    className="oi oi-caret-bottom arrows"
                  />
                  <span
                    className="oi oi-caret-top arrows"
                  /></span>
              </th>
              <th className='titles distance'>
                <span>distance </span>
                <span className='wrap'>
                  <span
                    className="oi oi-caret-bottom arrows"
                  />
                  <span
                    className="oi oi-caret-top arrows"
                  /></span>
              </th>
              <th className='titles amount'>
                <span>amount of passengers </span>
                <span className='wrap'>
                  <span
                    className="oi oi-caret-bottom arrows"
                  />
                  <span
                    className="oi oi-caret-top arrows"
                  /></span>
              </th>
              <th className='titles amount'>
                <span>amount of bookings </span>
                <span className='wrap'>
                  <span
                    className="oi oi-caret-bottom arrows"
                  />
                  <span
                    className="oi oi-caret-top arrows"
                  /></span>
              </th>
              <th className='titles amount'>
                <span>amount of routes </span>
                <span className='wrap'>
                  <span
                    className="oi oi-caret-bottom arrows"
                  />
                  <span
                    className="oi oi-caret-top arrows"
                  /></span>
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
