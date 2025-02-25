import { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: this.state.email, 
          password: this.state.password, 
        })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      // 3. decode fetch response: get jwt token from srv
      let token = await fetchResponse.json() 


      // 4. Stick token into localStorage
      localStorage.setItem('token', token);  

      // 5. Decode the token + put user document into state
      const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("LoginForm error", err)
      this.setState({ error: 'Login Failed - Try Again' });
    }
  }

  render() {
    return (
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off" >
            <label>Email</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              required 
            />
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              required 
            />
            <button 
              type="submit">
                LOG IN
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}