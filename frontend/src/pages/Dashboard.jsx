import "../App.css";

function Dashboard() {
  return (
    <div className="home-layout dark">

      <aside className="home-sidebar">
        <h2 className="sidebar-logo">LibPro</h2>

        <div className="sidebar-menu">
          <p>Dashboard</p>
          <p>Books</p>
          <p>Users</p>
          <p>Borrowing</p>
          <p>Transactions</p>
          <p>Resources</p>
          <p>Profile</p>
          <p>Settings</p>
        </div>
      </aside>

      <div className="premium-dashboard">

        <div className="dashboard-navbar">

          <div>
            <h2 className="dashboard-logo">
              Digital Reading Hub
            </h2>

            <p className="dashboard-tagline">
              Enterprise Analytics Platform
            </p>
          </div>

          <div className="nav-links">
            <a href="/">Home</a>
            <p>Resources</p>
          </div>

        </div>

        <div className="dashboard-hero">
          <h1>
            Dashboard Overview
          </h1>

          <p>
            Real-time analytics and centralized digital resource insights.
          </p>
        </div>

        <div className="analytics-grid">

          <div className="analytics-card">
            <h3>Total Resources</h3>

            <h1>125</h1>

            <p>+18% from last month</p>
          </div>

          <div className="analytics-card">
            <h3>Active Users</h3>

            <h1>48</h1>

            <p>12 users online now</p>
          </div>

          <div className="analytics-card">
            <h3>Borrowed Books</h3>

            <h1>37</h1>

            <p>Current circulation</p>
          </div>

          <div className="analytics-card">
            <h3>Overdue Returns</h3>

            <h1>4</h1>

            <p>Requires attention</p>
          </div>

        </div>

        <div className="dashboard-bottom">

          <div className="activity-section">

            <div className="section-header">
              <h2>Recent Activity</h2>

              <button>View All</button>
            </div>

            <div className="activity-card">
              <div>
                <h3>Attack on Titan</h3>

                <p>
                  Borrowed by Rahul Sharma
                </p>
              </div>

              <span className="status-issued">
                Issued
              </span>
            </div>

            <div className="activity-card">
              <div>
                <h3>Vagabond</h3>

                <p>
                  Returned by Sneha Reddy
                </p>
              </div>

              <span className="status-returned">
                Returned
              </span>
            </div>

            <div className="activity-card">
              <div>
                <h3>One Piece</h3>

                <p>
                  Due in 2 days
                </p>
              </div>

              <span className="status-pending">
                Pending
              </span>
            </div>

          </div>

          <div className="category-section">

            <h2>Popular Categories</h2>

            <div className="category-item">
              <p>Adventure</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>

            <div className="category-item">
              <p>Action</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "68%" }}
                ></div>
              </div>
            </div>

            <div className="category-item">
              <p>Psychological</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>

            <div className="category-item">
              <p>Slice of Life</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "42%" }}
                ></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;