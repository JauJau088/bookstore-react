import React from 'react';
import booksData from '../data/booksData';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Books = () => (
  <>
    {booksData.map((e) => (
      <Book
        key={e.id}
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

export default Books;
