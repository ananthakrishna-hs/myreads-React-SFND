import Shelf from "components/Shelf/Shelf";
import { SHELVES } from "Model";

const Home = ({ books, triggerUpdate }) => {
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
            triggerUpdate={triggerUpdate} />
          ))
        }
      </div>
      <div className="open-search">
        <a>Add a book</a>
      </div>
    </div>
  )
}

export default Home;