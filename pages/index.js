import Booklist from "../components/Booklist";
import BookContextProvider from "../components/contexts/BookContext";
import Navbar from "../components/Navbar";
import NewBookForm from "../components/NewBookForm";

export default function Home() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}
