import React from 'react';
import { Header } from "./components/Header"
import { UnderHeader } from './components/UnderHeader';
import { Carousel } from './components/Carousel';
import { GalleryData } from './components/GalleryData';
import './App.css';

const App = () => {
  const galleryData= GalleryData.slice();

  return (
    <div className='page-wrapper'>
      <Header />
      <UnderHeader />
      <Carousel data={galleryData} />
    </div>
  );
}

export default App;
