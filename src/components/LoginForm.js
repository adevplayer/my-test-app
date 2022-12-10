import React, { useState } from 'react'

const user = {
  username: 'devplayer',
  passwored: '1234'
};


const LoginForm = () => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const submitLogin = (e) => {
    e.preventDefault();

    if (user.username !== login.username) {
      alert('Invalid Username');
      return;
    }

    if (user.password !== login.password) {
      alert('Invalid Password');
      return;
    }

    alert('Passed');
  };

  return (
    <form onSubmit={submitLogin}>
      <input 
        type="text" 
        placeholder="Username"
        value={login.username}
        onChange={(e) => setLogin({...login, username: e.target.value})}
        required
      />

      <input 
        type="password" 
        placeholder="Password" 
        value={login.password}
        onChange={(e) => setLogin({...login, password: e.target.value})}
        required
      />

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm