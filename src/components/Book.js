import React from "react";



function Book(props) {
  
    const { book , onUpdate} =props;
    console.log(book);
    const options = [
      { value: "currentlyReading", text: "Currently Reading" },
      { value: "wantToRead", text: "Want to Read" },
      { value: "read", text: "Read" },
      { value: "none", text: "None" },
    ];
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select defaultValue = {book.shelf?book.shelf:"none"} onChange={(e) => onUpdate(book, e.target.value)}
>
              <option value="move" disabled>
                Move to...
              </option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                //   selected={this.props.book.shelf === option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(" - ")}
        </div>
      </div>
    );
  
}

export default Book;
