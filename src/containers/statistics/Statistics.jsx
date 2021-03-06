import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/es/FormControl'
import ListOfUsersStatistics from '../../components/statistics/ListOfUsersStatistics'
import Table from 'react-bootstrap/Table'
import { mapStateToProps, mapDispatchToProps } from '../../commands/statistics'
import { connect } from 'react-redux'
import './statistics.sass'
import Button from 'react-bootstrap/es/Button'

class Statistics extends React.Component {
  constructor() {
    super()
    this.state = {
      changed: false,
    }
  }

  componentDidMount() {
    this.props.requestStatistics(this.props.mode, this.props.order)
  }

  handleChange = event => {
    const value = event.target.value
    this.props.requestStatistics(0, true, value)
    this.setState({ name: value, changed: !this.state.changed })
  }

  render() {
    const { statistics } = this.props
    return (
      <>
        <InputGroup size="sm" className="mb-3 search" >
          <FormControl
            aria-label="Small"
            placeholder="Search the person"
            aria-describedby="inputGroup-sizing-sm"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <InputGroup.Prepend>
              <Button
                variant="outline-info"
                onClick={event => {
                  this.props.requestStatistics(0, true, this.state.name)
                  this.setState({ changed: !this.state.changed })
                }}>
              <span className="oi oi-magnifying-glass "/>
              </Button>
          </InputGroup.Prepend>
        </InputGroup>
        <div className="table-responsive-sm">
          <Table striped bordered hover size="sm" style={{ margin: 'auto' }}>
            <thead>
              <tr>
                <th className="titles name">
                  <span>name </span>
                  <span className="wrap">
                    <span
                      className="oi oi-caret-bottom arrows"
                      onClick={event => {
                        this.props.requestStatistics(0, true, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                    <span
                      className="oi oi-caret-top arrows"
                      onClick={event => {
                        this.props.requestStatistics(0, false, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                  </span>
                </th>
                <th className="titles amount">
                  <span>driver rating </span>
                  <span className="wrap">
                    <span
                      className="oi oi-caret-bottom arrows"
                      onClick={event => {
                        this.props.requestStatistics(1, true, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                    <span
                      className="oi oi-caret-top arrows"
                      onClick={event => {
                        this.props.requestStatistics(1, false, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                  </span>
                </th>
                <th className="titles amount">
                  <span> passenger rating </span>
                  <span className="wrap">
                    <span
                      className="oi oi-caret-bottom arrows"
                      onClick={event => {
                        this.props.requestStatistics(2, true, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                    <span
                      className="oi oi-caret-top arrows"
                      onClick={event => {
                        this.props.requestStatistics(2, false, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                  </span>
                </th>
                <th className="titles distance">
                  <span>distance </span>
                  <span className="wrap">
                    <span
                      className="oi oi-caret-bottom arrows"
                      onClick={event => {
                        this.props.requestStatistics(3, true, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                    <span
                      className="oi oi-caret-top arrows"
                      onClick={event => {
                        this.props.requestStatistics(3, false, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                  </span>
                </th>
                <th className="titles amount">
                  <span>amount of passengers </span>
                  <span className="wrap">
                    <span
                      className="oi oi-caret-bottom arrows"
                      onClick={event => {
                        this.props.requestStatistics(4, true, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                    <span
                      className="oi oi-caret-top arrows"
                      onClick={event => {
                        this.props.requestStatistics(4, false, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                  </span>
                </th>
                <th className="titles amount">
                  <span>amount of bookings </span>
                  <span className="wrap">
                    <span
                      className="oi oi-caret-bottom arrows"
                      onClick={event => {
                        this.props.requestStatistics(5, true, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                    <span
                      className="oi oi-caret-top arrows"
                      onClick={event => {
                        this.props.requestStatistics(5, false, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                  </span>
                </th>
                <th className="titles amount">
                  <span>amount of routes </span>
                  <span className="wrap">
                    <span
                      className="oi oi-caret-bottom arrows"
                      onClick={event => {
                        this.props.requestStatistics(6, true, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                    <span
                      className="oi oi-caret-top arrows"
                      onClick={event => {
                        this.props.requestStatistics(6, false, this.state.name)
                        this.setState({ changed: !this.state.changed })
                      }}
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <ListOfUsersStatistics
              statistics={statistics}
              key={this.state.changed}
            />
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
