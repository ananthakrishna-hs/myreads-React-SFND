import { useState, useEffect } from "react";

import "./App.css";
import Home from "components/Home/Home";
import * as BooksAPI from 'BooksAPI';

const App = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <div className="app">
      <Home books={books} triggerUpdate={getBooks} /> 
    </div>
  );
}

export default App;
