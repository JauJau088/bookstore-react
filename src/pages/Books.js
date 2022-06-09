import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import './Books.css';

const Books = () => {
  const data = useSelector((state) => state.booksReducer);

  return (
    <div className="BooksContainer Flex-Col Align-Center">
      {Object.keys(data).map((e) => (
        <Book
          key={e}
          id={e}
          title={data[e][0].title}
          author={data[e][0].author}
          genre={data[e][0].category}
        />
      ))}
      <hr />
      <AddBook />
    </div>
  );
};

export default Books;
