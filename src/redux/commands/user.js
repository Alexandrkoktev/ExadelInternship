import {getUserStarting, getUserDone, getUserError, resetUserData} from '../actions/user'
import fakeUser from './fakeUser';
import connect from 'react-redux/es/connect/connect'

const getUser = (email, password) => {
  return async function (dispatch) {
    try {
      dispatch(getUserStarting());
      fakeUser(email, password)
        .then((res)=>{
          typeof res === 'string' ? dispatch(getUserError(res)) : dispatch(getUserDone(res));
        })
    }
    catch (e) {
    }
  }
};

const resetUser = () => {
  resetUserData();
};

function mapStateToProps(state) {
  return {
    state: state,
    isLogged: !!state.userInfo.role,
    isError: !!state.userInfo.error,
    error: state.userInfo.error,
    isLoading: state.userInfo.loading
  };
}
const mapDispatchToProps = dispatch => ({
  getUser: (email, password) => dispatch(getUser(email, password))
});


const enhance = connect(mapStateToProps, mapDispatchToProps);

export {getUser, resetUser}
