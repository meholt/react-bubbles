import React, { useState } from "react";
import axiosWithAuth from '../components/utils/axiosWithAuth';


const Login = (props) => {

const [credentials, setCredentials] = useState({ username: '', password: ' '});

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(props.history);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
        .catch(err => console.log(err.response));
  };

  const handleChange = e => {
          setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
          })
  };
  
  // render() {

      return (
        <div>
          <h1>Welcome to the Bubble App!</h1>
          <form>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={credentials.username}
              onChange={handleChange}
            />

            <input
              type='password'
              name='password'
              placeholder='Password'
              value={credentials.password}
              onChange={handleChange}
            />
            <button>Log In</button>
          </form>
        </div>
      );

    // }
  }



export default Login;
