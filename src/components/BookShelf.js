import React from "react";
import Book from "./Book";

function BookShelf(props) {
  
    const { books, title, shelf, onUpdate } = props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter((book)=> book.shelf === shelf
            ).map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdate={onUpdate}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

export default BookShelf;
