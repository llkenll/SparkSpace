import './App.css';
import Masonry from 'react-masonry-css';
import Pin from './components/Pin'
import React from 'react';
const App = () => {
  const pins = [
    // Array of objects with image data
    { id: 1, imageUrl: 'images/nebula.jpg', title: 'Image 1' },
    { id: 2, imageUrl: 'images/nebula.jpg', title: 'Image 2' },
    { id: 3, imageUrl: 'images/nebula2.jpg', title: 'Image 3' },
    { id: 4, imageUrl: 'images/nebula.jpg', title: 'Image 4' },
    { id: 5, imageUrl: 'images/nebula2.jpg', title: 'Image 5' },

    // Add more pins as needed
  ];

  // Breakpoint columns configuration for responsiveness
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {pins.map(pin => <Pin key={pin.id} imageUrl={pin.imageUrl} title={pin.title} />)}
    </Masonry>
  );
};

export default App;
