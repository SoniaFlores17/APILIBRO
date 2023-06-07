import BooksInput from './BooksInput'
import BooksList from './BooksList'

const Books = ({books = [], setBooks}) => {
  return (
    <div>
        <BooksInput
        books={books}
        setBooks={setBooks}
        />
        <BooksList
        books={books}
        setBooks={setBooks}
        />
    </div>
  )
}

export default Books