import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/NavBar/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,horror} from './urls'
function App() {
  return (
    <div className='App'>
  <NavBar/>
  <Banner/>
  <RowPost url={originals} title='Netflix Originals'/>
  <RowPost url={action} title='Action' isSmall />
  <RowPost url={horror} title='Horror' isSmall />
    </div>
  );
}

export default App;
