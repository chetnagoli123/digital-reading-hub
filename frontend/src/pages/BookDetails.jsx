import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

function BookDetails() {

  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {

    fetch(`https://digital-reading-hub.onrender.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));

  }, [id]);

  if (!book) {
    return <h1>Loading...</h1>;
  }

  return (

    <div className="pdf-reader-page">

      <div className="pdf-top-section">

        <img
          src={book.cover_image}
          alt={book.title}
          className="pdf-cover-image"
        />

        <div className="pdf-book-info">

          <h1>{book.title}</h1>

          <p className="pdf-genre">
            {book.genre}
          </p>

          <p className="pdf-description">
            {book.description}
          </p>

          <button className="borrow-btn">
            Continue Reading
          </button>

        </div>

      </div>

      <div className="pdf-viewer-container">

        <a
          href={book.pdf_url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-pdf-btn"
        >

          Open PDF Reader

        </a>

      </div>

    </div>
  );
}

export default BookDetails;