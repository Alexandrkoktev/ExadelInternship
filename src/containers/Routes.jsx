import React from 'react'
import CustomList from '../components/list-components/CustomList'
import ListSwitchButton from '../components/ListSwtchButton'

class Routes extends React.Component {
  render() {
    return (
      <>
        <ListSwitchButton />
        <CustomList />
      </>
    )
  }
}

export default Routes
