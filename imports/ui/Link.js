import React from 'react';
import {browserHistory} from 'react-router';

export default class Link extends React.Component{
  onLogout () {
    browserHistory.push('/')
  };
  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <p>this is link.js</p>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
