// API
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'kz7CRrzJE0EHSkY6yCS1';

// Action types
const BOOK_SHOW = 'bookstore/books/BOOK_SHOW';
const BOOK_REMOVE = 'bookstore/books/BOOK_REMOVE';

// Reducer
const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_SHOW:
      return action.data || state;
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
    // Fetch (GET) and dispatch showBook action
    fetch(`${url}${appId}/books`)
      .then((response) => response.json())
      .then((json) => dispatch(showBook(json)));
  }
);

export const addBook = (id, title, author, category = '-') => (
  (dispatch) => {
    // Fetch (POST) and dispatch showBook action
    fetch(`${url}${appId}/books`, {
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
      .then(() => dispatch(fetchBook()));
  }
);

export const removeBook = (id) => ({
  type: BOOK_REMOVE,
  book: {
    id,
  },
});
