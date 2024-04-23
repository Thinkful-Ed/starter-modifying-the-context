import { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "../../contexts/BooksContext";

function BooksList() {
  const { books, setBooks } = useContext(BooksContext);
  const handleReserveButton = (bookId) => {
    const selected = books.find((book) => book.bookId === bookId);
    const index = books.indexOf(selected);
    setBooks([
      ...books.slice(0, index),
      { ...selected, borrowed: true },
      ...books.slice(index + 1),
    ]);
  };

  const bookList = books.map((book) => (
    <Book
      key={book.bookId}
      book={book}
      handleReserveButton={handleReserveButton}
    />
  ));
  return (
    <div className="container mt-5">
      <section className="d-flex gap-2 flex-wrap align-items-stretch justify-content-center">
        {bookList}
      </section>
    </div>
  );
}

export default BooksList;
