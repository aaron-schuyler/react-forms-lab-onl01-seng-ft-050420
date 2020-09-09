import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!!this.state.username && !!this.state.password)
    this.props.handleLogin({username: this.state.username, password: this.state.password})
  }

  updateUsername = (e) => {
    let username = e.target.value
    this.setState({username: username})
  }

  updatePassword = (e) => {
    let password = e.target.value
    this.setState({password: password})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.updateUsername} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.updatePassword} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
