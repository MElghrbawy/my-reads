import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";

class SearchBooks extends React.Component {
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };

  render() {
    const { books, onUpdate } = this.props;
    const { query } = this.state;
    const showingBooks =
      query === ""
        ? books
        : books.filter(
            (book) =>
              book.title.toLowerCase().includes(query.toLowerCase()) ||
              book.authors
                .join(" - ")
                .toLowerCase()
                .includes(query.toLowerCase())
          );
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
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdate={onUpdate}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
