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
            style={{ marginTop: '1%', maxWidth:"100%" }}
          >

            <thead >
            <tr >
              <th>
                <span style ={{margin:""}}>id</span>
              </th>
              <th>
                <span>name</span>
                <span className="oi oi-caret-bottom" style={{fontSize:"13px",marginLeft:"auto"}}/>
                <span className="oi oi-caret-top" style={{fontSize:"13px", marginLeft:"auto"}}/>
              </th>
              <th>
                <span>driver rating</span>
                <span className="oi oi-caret-bottom" style={{fontSize:"13px",marginLeft:"auto"}}/>
                <span className="oi oi-caret-top" style={{fontSize:"13px", marginLeft:"auto"}}/>
              </th>
              <th>
                <span> passenger rating</span>
                <span className="oi oi-caret-bottom" style={{fontSize:"13px",marginLeft:"auto"}}/>
                <span className="oi oi-caret-top" style={{fontSize:"13px", marginLeft:"auto"}}/>
              </th>
              <th>
                <span>distance</span>
                <span className="oi oi-caret-bottom" style={{fontSize:"13px",marginLeft:"auto"}}/>
                <span className="oi oi-caret-top" style={{fontSize:"13px", marginLeft:"auto"}}/>
              </th>
              <th>
                amount of passengers
                <span className="oi oi-caret-bottom" style={{fontSize:"13px",marginLeft:"auto"}}/>
                <span className="oi oi-caret-top" style={{fontSize:"13px", marginLeft:"auto"}}/>
              </th>
              <th>
                amount of bookings
                <span className="oi oi-caret-bottom" style={{fontSize:"13px",marginLeft:"auto"}}/>
                <span className="oi oi-caret-top" style={{fontSize:"13px", marginLeft:"auto"}}/>
              </th>
              <th>
                amount of routes
                <span className="oi oi-caret-bottom" style={{fontSize:"13px",marginLeft:"auto"}}/>
                <span className="oi oi-caret-top" style={{fontSize:"13px", marginLeft:"auto"}}/>
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
              <td>Thornton</td>
              <td>@fat</td>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Alex</td>
              <td>@twitter</td>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            </tbody>
          </Table>
      </>
    )
  }
}

export default Statistics
