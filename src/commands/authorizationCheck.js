import { logOut } from './user'


export const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export const mapDispatchToProps = dispatch => ({
  userLogOut() {
    dispatch(logOut())
  }
})
