import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBook } from './redux/books/books';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Error from './pages/Error';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBook()), []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} exact />
        <Route path="/books" element={<Books />} exact />
        <Route path="/categories" element={<Categories />} exact />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
