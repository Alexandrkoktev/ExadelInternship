import {connect} from 'react-redux';
import {resetUser} from './user'
import Main from '../../containers/main/Main'


function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}
const mapDispatchToProps = {
  resetUser
};


const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Main);
