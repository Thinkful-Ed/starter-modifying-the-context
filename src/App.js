import Header from "./components/common/Header";
import BooksList from "./components/Books/BooksList";

import { BooksContextProvider } from "./contexts/BooksContext";
import booksData from "./data/books.json";

function App() {
  return (
    <BooksContextProvider initialData={booksData}>
      <Header />
      <BooksList />
    </BooksContextProvider>
  );
}

export default App;
