import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as BooksAPI from "BooksAPI";
import BookItem from "components/BookItem/BookItem";

const Search = () => {
  const [search, setSearch] = useState('');
  const [shelfBooks, setShelfBooks] = useState({});
  const [books, setBooks] = useState([]);

  /**
   * Fetches all books in shelves to map the search results to thier shelves
   */
  const getShelfBooks = async () => {
    setShelfBooks({});
    try {
      const response = await BooksAPI.getAll();
      if (response.length) {
        const shelfCopy = {};
        for (const book of response) {
          shelfCopy[book.id] = book.shelf;
        }
        setShelfBooks(shelfCopy)
      } else {
        setShelfBooks({});
      }
    } catch (err) {
      console.error(err);
      alert('Failed to get books');
    }
  }

  useEffect(() => {
    getShelfBooks();
  }, [])

  /**
   * Searches the books based on search string entered
   */
  const searchBooks = async () => {
    // Empty the books for re-render
    setBooks([]);
    try {
      if (search !== '') {
        const response = await BooksAPI.search(search);
        if (Array.isArray(response)) {
          const tempBooks = response;
          for (let i = 0; i < tempBooks.length; i++) {
            if (shelfBooks[tempBooks[i].id]) {
              tempBooks[i].shelf = shelfBooks[tempBooks[i].id];
            } else {
              tempBooks[i].shelf = "none";
            }
          }
          setBooks(tempBooks);
        } else {
          setBooks([]);
        }
      }
    } catch (err) {
      console.error(err);
      alert('Failed to search books');
    }
  }

  /**
   * Updates book with newly selected bookshelf
   * @param {object} updatedBook Book to be updated
   * @param {string} shelf Destination shelf
   */
  const updateBook = (updatedBook, shelf) => {
    const tempBooks = books;
    setBooks([]);
    const index = tempBooks.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      tempBooks[index].shelf = shelf;
    }
    setBooks(tempBooks);
  }

  useEffect(() => {
    // Debounce the search requests for 2 seconds
    const timer = setTimeout(() => {
      searchBooks(search);
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            autoFocus
            placeholder="Search by title, author, or ISBN"
            onChange={event => setSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            books.map((book, index) => (
              <BookItem key={index} book={book} triggerUpdate={updateBook} />
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default Search;