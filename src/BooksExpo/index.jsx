import { useState } from "react"
import axios from 'axios';


const BooksExpo = ({ categories = [] }) => {
    
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    try {
      
      const response = await axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`);
      setBooks(response.data.docs || []);
      setError(null);
    } catch (error) {
      
      setBooks([]);
      setError('No se pudo obtener los libros.');
    }
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchBooks();
  };

  return (
    <div className="container">
      <h4 className="mt-4">Busca tus libros...</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el nombre"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="submit">Buscar</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      {books.length > 0 && (
        <ul className="list-group text-center">
          {books.map(book => (
            <li className="list-group-item " key={book.key}>
              <h2>{book.title}</h2>
              {book.author_name && (
                <p>Autores: {book.author_name.join(', ')}</p>
              )}
              {book.cover_i && (
                <img
                  src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt="Portada del libro"
                  className="img-fluid"
                />
              )}
              {book.first_publish_year && (
                <p>Año de publicación: {book.first_publish_year}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
 
}


export default BooksExpo