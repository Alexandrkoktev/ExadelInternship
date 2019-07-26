import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Table from 'react-bootstrap/Table'
import FormControl from 'react-bootstrap/es/FormControl'
import UserStats from '../../components/statistics/UserStats'

class Statistics extends React.Component {
  render() {

    return (
      <>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: '3%', maxWidth: '30%' }}>
          <FormControl aria-label="Small" placeholder="Search the person" aria-describedby="inputGroup-sizing-sm"/>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
        <Table
          striped
          bordered
          hover
          size='sm'
          style={{ marginTop: '2.5%', maxWidth: '100%' }}
        >
          <thead>
          <tr>
            <th>
              <span>name </span>
              <span className="oi oi-caret-bottom" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
              <span className="oi oi-caret-top" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
            </th>
            <th>
              <span>driver rating </span>
              <span className="oi oi-caret-bottom" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
              <span className="oi oi-caret-top" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
            </th>
            <th>
              <span> passenger rating </span>
              <span className="oi oi-caret-bottom" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
              <span className="oi oi-caret-top" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
            </th>
            <th>
              <span>distance </span>
              <span className="oi oi-caret-bottom" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
              <span className="oi oi-caret-top" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
            </th>
            <th>
              <span>amount of passengers </span>
              <span className="oi oi-caret-bottom" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
              <span className="oi oi-caret-top" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
            </th>
            <th>
              <span>amount of bookings </span>
              <span className="oi oi-caret-bottom" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
              <span className="oi oi-caret-top" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
            </th>
            <th>
              <span>amount of routes </span>
              <span className="oi oi-caret-bottom" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
              <span className="oi oi-caret-top" style={{ fontSize: '13px', marginLeft: 'auto' }}/>
            </th>
          </tr>
          </thead>
          <tbody>
          <UserStats/>
          </tbody>
        </Table>
      </>
    )
  }
}

export default Statistics
