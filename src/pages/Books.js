import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Books = () => {
  const data = useSelector((state) => state.booksReducer);

  return (
    <>
      {Object.keys(data).map((e) => (
        <Book
          key={e}
          id={e}
          title={data[e][0].title}
          author={data[e][0].author}
          genre={data[e][0].category}
        />
      ))}
      <AddBook />
    </>
  );
};

export default Books;
