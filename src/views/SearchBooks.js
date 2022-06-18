import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import * as BooksAPI from "../utils/BooksAPI";

function SearchBooks(props) {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    try {BooksAPI.search(query).then((books) => {
          console.log(books);
          Array.isArray(books) ? setSearchBooks(books) : setSearchBooks([]);
        });
    } catch (err) {
      console.log(err);
    }


  },[query])

  const updateQuery = (inputQuery) => {
    setQuery(inputQuery.trim());
   
  };

  const { books, onUpdate } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onInput={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            searchBooks.map((searchBook) => {
              const book = books.find(book => book.id === searchBook.id)
              if (book) {
                return (<li key={book.id}>
                <Book book={book} onUpdate={onUpdate} />
              </li>)
              }
              return (<li key={searchBook.id}>
                <Book book={searchBook} onUpdate={onUpdate} />
              </li>)
            }
           
            )}
        </ol>
      </div>
    </div>
  );
}

export default SearchBooks;
