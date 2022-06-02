import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Error from './pages/Error';

const App = () => (
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

export default App;
