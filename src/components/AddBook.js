import React from 'react';

const AddBook = () => (
  <div Flex-Col>
    <h2>ADD NEW BOOK</h2>
    <form Flex-Row Just-SpaceBetween>
      <input placeholder="Book title" />
      <input placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
