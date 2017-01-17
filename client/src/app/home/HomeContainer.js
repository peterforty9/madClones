import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Home from './Home/Home'

import * as UserActionCreators from './Home/modules/user';
import * as ModalActionCreators from './Home/modules/modals';
import * as PopOverActionCreators from './Home/modules/popOver';

const mapStateToProps = (state) => {
  const { isFocusOnPopHover } = state.popOver;
  const { isAuthenticated } = state.login;
  const { isFocusOnModal } = state.modals;
  const { isPopOverOpen } = state.popOver;
  const { errorMessages } = state.notification;
  const { isModalOpen } = state.modals;
  const { fullName } = state.user;

  return {
    isFocusOnPopHover,
    isAuthenticated,
    isFocusOnModal,
    isPopOverOpen,
    errorMessages,
    isModalOpen,
    fullName
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    userActions: bindActionCreators(UserActionCreators, dispatch),
    modalActions: bindActionCreators(ModalActionCreators, dispatch),
    popOverActions: bindActionCreators(PopOverActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);