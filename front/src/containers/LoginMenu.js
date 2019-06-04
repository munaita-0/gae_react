import { Component } from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Cookie } from '../cookie'
import { loginStatus } from '../actions/LoginActions'

class LoginMenu extends Component {
  constructor(props) {
    super(props)

    if (!Cookie.isExist()) {
      Cookie.clear();
      props.handleUpdateLogin(false);
      return false;
    }
    
    if (Cookie.activeCheck()) {
      props.handleUpdateLogin(true)
      return true;
    } else {
      Cookie.clear();
      props.handleUpdateLogin(false);
      return false;
    }
  }

  render() {
    if (this.props.login) {
      return 'login'
    } else {
      return 'not login'
    }
  }
}

function mapStateToProps(state) {
  let { login } = state
  return { login }
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdateLogin: bool => {
      dispatch(loginStatus(bool))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (LoginMenu)
