import React from 'react';

function Profile() {
  return (
    <div className="page profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile; 