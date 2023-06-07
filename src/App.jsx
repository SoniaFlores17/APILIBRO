import React, { useState } from 'react';
import BooksExpo from './BooksExpo';


function App() {
    const [searchTerm, setSearchTerm] = useState('Harry Potter')


    return (
      <div className='mb-5'>
        <hr />
          <h2 className='text-center'>Biblioteca</h2>
          <hr />
          <BooksExpo 
            searchTerm = {searchTerm}
            setSearchTerm = {setSearchTerm}
          />
          <hr />

      </div>

    )
}

export default App