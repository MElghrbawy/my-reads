import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import MyReads from "./views/MyReads";
import SearchBooks from "./views/SearchBooks";

export const BookContext = React.createContext();

function BooksApp() {
  const [books, setBooks] = useState([]);

  const getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      setBooks(books);
    });
  };
 
  useEffect(() => {
   getAllBooks()
  },[]);

  const updateShelf = (book, shelf) => {
     BooksAPI.update(book, shelf).then(() => {
      getAllBooks();
     });
  };


    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={<MyReads books={books} onUpdate={updateShelf}/>}
          />
          <Route
            path="/search"
            element={<SearchBooks books={books} onUpdate={updateShelf}/>}
          />
        </Routes>
      </div>
    );
  
}

export default BooksApp;
