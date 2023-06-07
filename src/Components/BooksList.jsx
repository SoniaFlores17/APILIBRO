import React from 'react'

const BooksList = ({ books = [], setBooks }) => {

    const deleteBooks = (books) => {
        const index = books.indexOf(books);
        if (index !== -1) {
            const newList = [...books];
            newList.splice(index, 1);
            setBooks(newList);
        }
    }

    return (
        <ol>
            {
                books.map((books, index) => (
                    <li onClick={() => deleteBooks(books)}
                        key={`${books}-${index}`}
                        style={{ fontWeight: 'bold'}}
                    >
                        {books}
                    </li>
                ))
            }
        </ol>
    )
}

export default BooksList