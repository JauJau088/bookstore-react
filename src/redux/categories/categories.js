// Action types
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});
