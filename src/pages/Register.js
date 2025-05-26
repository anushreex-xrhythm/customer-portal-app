import React from 'react';

function Register() {
  return (
    <div className="page register">
      <h2>Register</h2>
      <form className="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register; 