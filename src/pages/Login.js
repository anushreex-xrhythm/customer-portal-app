import React from 'react';

function Login() {
  return (
    <div className="page login">
      <h2>Login</h2>
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login; 