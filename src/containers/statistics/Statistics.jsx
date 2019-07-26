import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Table from 'react-bootstrap/Table'
import FormControl from 'react-bootstrap/es/FormControl'

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
              <span style={{ margin: '' }}>id</span>
            </th>
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
          <tr>
            <td>1</td>
            <td>
              Mark
            </td>
            <td>
              5
            </td>
            <td>
              4
            </td>
            <td>17</td>
            <td>5</td>
            <td>8</td>
            <td>6</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>
              4
            </td>
            <td>
              5
            </td>
            <td>20</td>
            <td>4</td>
            <td>7</td>
            <td>10</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Alex</td>
            <td>
              3
            </td>
            <td>
              3
            </td>
            <td>11</td>
            <td>2</td>
            <td>5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Dmitry</td>
            <td>
              4
            </td>
            <td>
              4
            </td>
            <td>8</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Max</td>
            <td>
              4
            </td>
            <td>
              5
            </td>
            <td>22</td>
            <td>7</td>
            <td>6</td>
            <td>9</td>
          </tr>
          </tbody>
        </Table>
      </>
    )
  }
}

export default Statistics
