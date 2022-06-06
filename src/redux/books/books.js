// Action types
const BOOK_ADD = 'bookstore/books/BOOK_ADD';
const BOOK_REMOVE = 'bookstore/books/BOOK_REMOVE';

// Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_ADD:
      return [
        ...state,
        action.book,
      ];
    case BOOK_REMOVE:
      return [...state].filter((e) => e.book.id === action.book.id);
    default:
      return state;
  }
};

export default booksReducer;

// Action Creators
export const addBook = (id, title) => ({
  type: BOOK_ADD,
  book: {
    id,
    title,
  },
});

export const removeBook = (id) => ({
  type: BOOK_REMOVE,
  book: {
    id,
  },
});