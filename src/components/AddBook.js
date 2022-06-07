import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(uuidv4(), title, author));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="Flex-Col">
      <h2>ADD NEW BOOK</h2>
      <form
        className="Flex-Row Just-SpaceBetween"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Book title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
