import booksData from './data/booksData';
import Book from './components/Book';

const App = () => (
  booksData.map((e) => (
    <Book
      key={e.id}
      title={e.title}
      author={e.author}
      genre={e.genre}
      currentChapter={e.currentChapter}
      progress={e.progress}
    />
  ))
);

export default App;
