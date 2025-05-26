import React from 'react';

function Support() {
  return (
    <div className="page support">
      <h2>Support</h2>
      <form className="form">
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Describe your issue" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Support; 