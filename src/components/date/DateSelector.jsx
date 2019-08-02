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
        <DateTimePicker readonly="readonly" value={this.state.date} />
      </div>
    )
  }
}
export default DateSelector
