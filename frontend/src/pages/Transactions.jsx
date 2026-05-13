import "../App.css";

function Transactions() {
  const transactions = [
    {
      id: 1,
      book: "Attack on Titan",
      user: "Rahul Sharma",
      date: "2026-05-12",
      status: "Issued",
    },
    {
      id: 2,
      book: "Vagabond",
      user: "Sneha Reddy",
      date: "2026-05-11",
      status: "Returned",
    },
    {
      id: 3,
      book: "One Piece",
      user: "Arjun Verma",
      date: "2026-05-10",
      status: "Pending",
    },
  ];

  return (
    <div className="transactions-page">

      <div className="transactions-header">
        <h1>Transactions</h1>

        <button className="transaction-btn">
          Export Data
        </button>
      </div>

      <div className="transactions-table">

        <div className="transactions-head">
          <p>Book</p>
          <p>User</p>
          <p>Date</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {transactions.map((transaction) => (
          <div className="transactions-row" key={transaction.id}>

            <p>{transaction.book}</p>

            <p>{transaction.user}</p>

            <p>{transaction.date}</p>

            <p
              className={
                transaction.status === "Issued"
                  ? "status-issued"
                  : transaction.status === "Returned"
                  ? "status-returned"
                  : "status-pending"
              }
            >
              {transaction.status}
            </p>

            <div className="transactions-actions">
              <button>View</button>
              <button>Delete</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Transactions;