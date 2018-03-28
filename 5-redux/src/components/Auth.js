import React, { Component } from 'react'
import {connect} from 'react-redux';

import { bindActionCreators } from 'redux';
import {updateUser} from '../store/user/actions'

class Auth extends Component {
  state = {
    username: '',
    password: ''
  };

  changeUsernameHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  changePasswordHandler = event => {
    this.setState({
      password: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();

    const value = {
      user: {...this.state}
    }

    this.props.updateUser( value )
  }

  render() {
    const { user } = this.props;

    return (
      <form className="auth" onSubmit={ this.submitHandler}>
        <input placeholder="username" value={this.state.username} 
          onChange={this.changeUsernameHandler} />
        <input type="password" placeholder="password" value={this.state.password} 
          onChange={this.changePasswordHandler} />
        <input type="submit" value="Send" />
        <p>{user.username} - {user.password}</p>
      </form>
    )
  }
}

const mapStateToProps = store => ({
  user: store.userState.user
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
