import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Books = () => {
  const data = useSelector((state) => state.booksReducer);

  return (
    <>
      {data.map((e) => (
        <Book
          key={e.id}
          id={e.id}
          title={e.title}
          author={e.author}
          genre={e.genre}
          currentChapter={e.currentChapter}
          progress={e.progress}
        />
      ))}
      <AddBook />
    </>
  );
};

export default Books;
