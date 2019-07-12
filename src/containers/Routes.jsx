import React from 'react'
// eslint-disable-next-line no-unused-vars
import CustomList from '../components/list-components/CustomList'
// eslint-disable-next-line no-unused-vars
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
