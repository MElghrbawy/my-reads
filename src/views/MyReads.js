import React from "react";
import { Link } from 'react-router-dom'
import BookShelf from "../components/BookShelf";

class MyReads extends React.Component {

    render() {
      const { books, onUpdate } = this.props
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title='Currenlty Reading' shelf='currentlyReading' books={books} onUpdate={onUpdate}/>
                <BookShelf title='Want to read' shelf='wantToRead' books={books} onUpdate={onUpdate}/>
                <BookShelf title='Read' shelf='read' books={books} onUpdate={onUpdate}/>                 
               
            </div>
            
            <Link className="open-search" to="/search" >
            <button>
                Add a book
              </button>
            </Link>
          
            </div>
            </div>

          
        )
    }
}


export default MyReads