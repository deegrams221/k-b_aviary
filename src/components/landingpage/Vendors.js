import React from 'react';

export default function Vendors() {
  return (
    <div className='vendors'>
      {/* Fancy Feathers Parrot Store */}
      <a
        target='_blank'
        rel='noopener noreferrer'
        title='Fancy Feathers Parrot Store'
        href='http://www.fancyfeathersstore.com/'
      >
        <img
          alt='Fancy Feathers Parrot Store'
          src={require('../../images/Fancy-Feathers_logo.png')}
        />
      </a>
      {/* Fancy Feather Bird Farm */}
      <a
        target='_blank'
        rel='noopener noreferrer'
        title='Fancy Feathers Bird Farm'
        href='http://fancyfeathers.net/'
      >
        <img
          alt='Fancy Feather Bird Farm'
          src={require('../../images/Fancy-Feathers.png')}
        />
      </a>
      {/* Laraine's Lady Gouldians */}
      <a
        target='_blank'
        rel='noopener noreferrer'
        title='Laraines Lady Gouldians'
        href='https://www.ladygouldian.com/'
      >
        <img
          alt='Laraines Lady Gouldians'
          src={require('../../images/Lady-Gouldian.png')}
        />
      </a>
    </div>
  );
}
