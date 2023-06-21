import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/NavBar/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
  <NavBar/>
  <Banner/>
  <RowPost/>
    </div>
  );
}

export default App;
