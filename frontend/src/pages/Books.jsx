import { useEffect, useState } from "react";
import "../App.css";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="books-page">

      <div className="books-header">
        <h1>Books Management</h1>

        <button className="add-book-btn">
          + Add Book
        </button>
      </div>

      <div className="books-table">

        <div className="table-head">
          <p>Cover</p>
          <p>Title</p>
          <p>Genre</p>
          <p>Actions</p>
        </div>

        {books.map((book) => (
          <div className="table-row" key={book.id}>

            <img
              src={book.cover_image}
              alt={book.title}
              className="table-book-image"
            />

            <p>{book.title}</p>

            <p>{book.genre}</p>

            <div className="table-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Books;