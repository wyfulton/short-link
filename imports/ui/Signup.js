import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim()
    let password = this.refs.password.value.trim()


    Accounts.createUser({email, password}, (err) => {
      if(err){
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''})
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Signup yo</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text"  ref="email" name="email" placeholder="Email"/>
          <input type="text" ref="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>
        <Link to="/">need to Login?</Link>
      </div>
    );
  }
}
