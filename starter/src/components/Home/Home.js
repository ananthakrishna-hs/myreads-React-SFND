import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Shelf from "components/Shelf/Shelf";
import { SHELVES } from "Model";
import * as BooksAPI from "BooksAPI";

const Home = () => {
  const [books, setBooks] = useState([]);

  /**
   * Fetches all books stacked in shelves
   */
  const getBooks = async () => {
    try {
      const res = await BooksAPI.getAll();
      setBooks(res);
    } catch (err) {
      console.error(err);
      alert('Failed to get books');
    }
  }

  useEffect(() => {
    getBooks();
  }, [])

  /**
   * Updates book with newly selected bookshelf
   * @param {object} updatedBook Book to be updated
   * @param {string} shelf Destination shelf
   */
  const updateBook = (updatedBook, shelf) => {
    const tempBooks = books;
    // Empty the list for re-render
    setBooks([]);
    const index = tempBooks.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      tempBooks[index].shelf = shelf;
    }
    setBooks(tempBooks);
  } 

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>Digital Bhandara</h1>
      </div>
      <div className="list-books-content">
        {
          Object.keys(SHELVES).map(shelf => (
            <Shelf key={SHELVES[shelf].name} name={SHELVES[shelf].name}
            books={books.filter(book => book.shelf === SHELVES[shelf].key)}
            triggerUpdate={updateBook} />
          ))
        }
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default Home;