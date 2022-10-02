import BookItem from "components/BookItem/BookItem";

const Shelf = ({ name, books, triggerUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map(book => (
              <BookItem key={book.id} book={book} triggerUpdate={triggerUpdate} />
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default Shelf;