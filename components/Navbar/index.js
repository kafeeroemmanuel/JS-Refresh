import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading list</h1>
      <p>Currently i have {books.length} books to get through. </p>
    </div>
  );
};

export default Navbar;
