const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'kz7CRrzJE0EHSkY6yCS1';

// Action types
const BOOK_SHOW = 'bookstore/books/BOOK_SHOW';
const BOOK_FETCH = 'bookstore/books/BOOK_FETCH';
const BOOK_ADD = 'bookstore/books/BOOK_ADD';
const BOOK_REMOVE = 'bookstore/books/BOOK_REMOVE';

// Reducer
const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_SHOW:
      return action.data;
    case BOOK_ADD:
      return [
        ...state,
        action.book,
      ];
    case BOOK_REMOVE:
      return [...state].filter((e) => e.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;

// Action Creators
export const showBook = (data) => ({
  type: BOOK_SHOW,
  data,
});

export const fetchBook = () => (
  (dispatch) => {
    dispatch({ type: BOOK_FETCH });

    return fetch(`${url}${appId}/books`).then(
      (response) => dispatch(showBook(response)),
    );
  }
);

export const addBook = (id, title, author) => ({
  type: BOOK_ADD,
  book: {
    id,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: BOOK_REMOVE,
  book: {
    id,
  },
});
