import React from 'react';

export default function Header() {
  return (
    <div className='header'>
      <img
        src={require('../images/logo.jpg')}
        alt='K & B Aviary Logo'
        width='250px'
      />
      <div className='header-links'>
        {/* <a id='about'>ABOUT</a> */}
        {/* Twitter */}
        <a
          target='_blank'
          rel='noopener noreferrer'
          title='follow me on Twitter'
          href='https://www.twitter.com/PLACEHOLDER'
        >
          <img
            alt='follow me on Twitter'
            src='https://c866088.ssl.cf3.rackcdn.com/assets/twitter30x30.png'
          />
        </a>
        {/* Facebook */}
        <a
          target='_blank'
          rel='noopener noreferrer'
          title='follow me on facebook'
          href='https://www.facebook.com/PLACEHOLDER'
        >
          <img
            alt='follow me on facebook'
            src='https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png'
          />
        </a>
        {/* Instagram */}
        <a
          target='_blank'
          rel='noopener noreferrer'
          title='follow me on instagram'
          href='https://www.instagram.com/PLACEHOLDER'
        >
          <img
            alt='follow me on instagram'
            src='https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png'
          />
        </a>
      </div>
    </div>
  );
}
