import React from 'react';
import { Meteor } from "meteor/meteor"
import { Link } from 'react-router'

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim()
    let password = this.refs.password.value.trim()

    Meteor.loginWithPassword({email}, password, (err) => {
      if(err) {
        this.setState({error: err.reason})
      } else {
        this.setState({error: ''})
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Login yo</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="text"  ref="email" name="email" placeholder="Email"/>
          <input type="text" ref="password" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>

        <Link to="/signup">Need an account?</Link>
      </div>
    );
  }
}
