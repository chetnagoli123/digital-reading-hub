import "../App.css";

function Users() {
  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@klh.edu.in",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Sneha Reddy",
      email: "sneha@klh.edu.in",
      role: "Faculty",
      status: "Active",
    },
    {
      id: 3,
      name: "Arjun Verma",
      email: "arjun@klh.edu.in",
      role: "Admin",
      status: "Inactive",
    },
  ];

  return (
    <div className="users-page">

      <div className="users-header">
        <h1>User Management</h1>

        <button className="add-user-btn">
          + Add User
        </button>
      </div>

      <div className="users-table">

        <div className="users-head">
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {users.map((user) => (
          <div className="users-row" key={user.id}>

            <p>{user.name}</p>

            <p>{user.email}</p>

            <p>{user.role}</p>

            <p
              className={
                user.status === "Active"
                  ? "status-active"
                  : "status-inactive"
              }
            >
              {user.status}
            </p>

            <div className="users-actions">
              <button>Edit</button>
              <button>Remove</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Users;