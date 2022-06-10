// API
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'kz7CRrzJE0EHSkY6yCS1';

// Action types
const BOOK_SHOW = 'bookstore/books/BOOK_SHOW';

// Reducer
const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_SHOW:
      return action.data || state;
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
    // Fetch (GET), then dispatch showBook action
    fetch(`${url}${appId}/books`)
      .then((response) => response.json())
      .then((json) => dispatch(showBook(json)));
  }
);

export const addBook = (id, title, author, category = 'Genre') => (
  (dispatch) => {
    // Fetch (POST), then dispatch fetchBook action
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

export const removeBook = (id) => (
  (dispatch) => {
    // Fetch (DELETE), then dispatch fetchBook action
    fetch(`${url}${appId}/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    })
      .then(() => dispatch(fetchBook()));
  }
);
