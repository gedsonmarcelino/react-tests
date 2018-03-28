import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux';
import {addTweet} from '../store/tweet/actions'

export class Tweet extends Component {
  state = {
    message: ''
  }

  changeHandler = event => {
    this.setState({
      message: event.target.value
    })
  }

  sendMessageHandler = () => {
    this.props.addTweet( this.state.message )
    this.setState({
      message: ''
    })
  }

  render() {
    const {tweets} = this.props;

    return (
      <div>
        <h3>Tweets</h3>
        <ul>
          {tweets.map( obj => (
            <li>{obj}</li>
          ))}
        </ul>

        <div>
          <input type="text" value={this.state.message} onChange={this.changeHandler}/>
          <button onClick={this.sendMessageHandler}>Send</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  tweets: store.tweetState.tweets
})

const mapDispatchToProps = dispatch => ({
  addTweet : bindActionCreators({ addTweet }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweet)
