import React, { useContext } from "react";
import Bookdetails from "../Bookdetails";
import { BookContext } from "../contexts/BookContext";

const Booklist = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="booklist">
      <ul>
        {books.map((book) => {
          return <Bookdetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      <p>No books to show</p>
    </div>
  );
};

export default Booklist;
