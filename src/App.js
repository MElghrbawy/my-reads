import React from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import MyReads from "./views/MyReads";
import SearchBooks from "./views/SearchBooks";

export const BookContext = React.createContext();

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  getAllBooks = async () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({
        books,
      });
    });
  };
  componentDidMount() {
    this.getAllBooks()
  }
  updateShelf = async (book, shelf) => {
     BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
     });
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={<MyReads books={this.state.books} onUpdate={this.updateShelf}/>}
          />
          <Route
            path="/search"
            element={<SearchBooks books={this.state.books} onUpdate={this.updateShelf}/>}
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
