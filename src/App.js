import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container } from 'react-bootstrap'
import './styleForApp.sass'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import Footer from './components/footer/Footer'
// eslint-disable-next-line no-unused-vars
import Header from './components/header/Header'
// eslint-disable-next-line no-unused-vars
import Content from './components/content/Content'
import { store } from './store/store'
import { restoreUser } from './commands/user';
import { connect } from 'react-redux';

store.dispatch(restoreUser())

class App extends React.Component {

  render() {
    const { loading } = this.props;
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <>
        <Header />
        <Container>
          <Content />
        </Container>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.userInfo.loading
})

export default connect(mapStateToProps)(App)
