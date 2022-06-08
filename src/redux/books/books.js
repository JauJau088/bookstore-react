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
    fetch(`${url}${appId}/books`)
      .then((response) => response.json())
      .then((json) => dispatch(showBook(json)));
  }
);

export const addBook = (id, title, author, category = '-') => (
  (dispatch) => {
    dispatch({ type: BOOK_ADD });

    return fetch(`${url}${appId}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
    })
      .then(
        (response) => dispatch(showBook(response)),
      );
  }
);

export const addBookOld = (id, title, author) => ({
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
