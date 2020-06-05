import React from 'react';
import './App.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <WarningSign text="Some Text" />
      <MyBadge text="badge text" variant="danger" />
      <BookList />

    </div>
  );
}

export default App;
