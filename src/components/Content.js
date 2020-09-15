import React from 'react';

export default function Content() {
  return (
    <div className='content'>
      <p>Small hobby breeder of cockatiels and green cheek conures</p>
      <img
        src={require('../images/placeholder-images-image_large.webp')}
        alt='K & B Aviary Logo'
        width='575px'
      />
    </div>
  );
}
