import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "oliver twist", author: "Mark Twain", id: 1 },
    { title: "sherlock holmes", author: "sir athur conan", id: 2 },
    { title: "Lord of the rings", author: "J.J Tolking", id: 3 },
    {
      title: "The subtle art of not giving a fuck",
      author: "Charles manson",
      id: 4,
    },
  ]);

  const addBooks = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const deleteBooks = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBooks, deleteBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
