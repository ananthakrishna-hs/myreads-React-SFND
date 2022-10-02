import * as BooksAPI from "BooksAPI";

const BookItem = ({ book, triggerUpdate }) => {

  const moveBook = async (book, targetShelf) => {
    try {
      await BooksAPI.update(book, targetShelf);
      if (triggerUpdate) {
        triggerUpdate(book, targetShelf);
      }
    } catch (err) {
      console.err(err);
      alert('Failed to update shelf');
    }
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={event => moveBook(book, event.target.value)}>
              <option value="" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        {
          book.authors && book.authors.map(author => (
            <div className="book-authors" key={author}>{author}</div>)
          )
        }
      </div>
    </li>
  )
}

export default BookItem;