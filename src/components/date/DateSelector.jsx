import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker'
class DateSelector extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => {
    this.setState({ date })
    this.props.onChange(date)
  }

  render() {
    return (
      <div className="date-selector">
        <div className="test">
          <DateTimePicker onChange={this.onChange} value={this.state.date} />
        </div>
      </div>
    )
  }
}
export default DateSelector
