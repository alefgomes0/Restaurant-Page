import React from 'react';
import { Header } from "./components/Header"
import { UnderHeader } from './components/UnderHeader';
import './App.css';

const App = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <UnderHeader />
    </div>
  );
}

export default App;
