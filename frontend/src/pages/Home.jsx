import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {

  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));

  }, []);

  return (

    <div className={darkMode ? "home-layout dark" : "home-layout light"}>

      <aside className="home-sidebar">

        <h2 className="sidebar-logo">
          LibPro
        </h2>

        <div className="sidebar-menu">

          <a href="/books">Books</a>

          <a href="/users">Users</a>

          <a href="/transactions">
            Transactions
          </a>

          <a href="/profile">
            Profile
          </a>

          <a href="/settings">
            Settings
          </a>

          <a href="/chat">
            Chat
          </a>

        </div>

      </aside>

      <div className="app">

        <nav className="navbar">

          <div>

            <h2 className="logo">
              Digital Reading Hub
            </h2>

            <p className="subtitle">
              Cloud-Based Content Platform
            </p>

          </div>

          <div className="nav-links">

            <a href="/">Home</a>

            <a href="/dashboard">
              Dashboard
            </a>

            <p>Resources</p>

          </div>

        </nav>

        <h1 className="heading">
          READ AND EVOLVE!!
        </h1>

        <p className="description">
          Cloud-based platform for centralized digital resource management and
          scalable content distribution.
        </p>

        <input
          type="text"
          placeholder="Search resources..."
          className="search-bar"
        />

        <div className="book-grid">

          {books.map((book) => (

            <Link
              to={`/books/${book.id}`}
              key={book.id}
              className="book-link"
            >

              <div className="book-card">

                <img
                  src={book.cover_image}
                  alt={book.title}
                  className="book-image"
                />

                <div className="book-content">

                  <h2>{book.title}</h2>

                  <p className="genre">
                    {book.genre}
                  </p>

                  <p className="book-description">
                    {book.description}
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;