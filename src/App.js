import booksData from './data/booksData';
import Navbar from './components/Navbar';
import Book from './components/Book';
import AddBook from './components/AddBook';

const App = () => (
  <>
    <Navbar />
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

export default App;
