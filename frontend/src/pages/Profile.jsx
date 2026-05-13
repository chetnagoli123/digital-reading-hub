import "../App.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-top">

          <img
            src="https://i.pravatar.cc/200"
            alt="profile"
            className="profile-image"
          />

          <div>
            <h1>Komali Nandamuri</h1>

            <p className="profile-role">
              Library Administrator
            </p>

            <p className="profile-email">
              komali@klh.edu.in
            </p>
          </div>

        </div>

        <div className="profile-details">

          <div className="detail-box">
            <h3>Total Resources Managed</h3>
            <p>125</p>
          </div>

          <div className="detail-box">
            <h3>Active Users</h3>
            <p>48</p>
          </div>

          <div className="detail-box">
            <h3>Books Issued</h3>
            <p>37</p>
          </div>

        </div>

        <div className="profile-actions">

          <button>Edit Profile</button>

          <button>Change Password</button>

        </div>

      </div>

    </div>
  );
}

export default Profile;