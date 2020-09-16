import React from 'react';
import Form from './Form';
import Links from './Links';

export default function Footer() {
  return (
    <div className='footer'>
      <img
        src={require('../images/logo3.jpg')}
        alt='K & B Aviary Logo'
        width='250px'
      />
      <div className='footer-links'>
        <Links />
      </div>
      <div className='footer-info'>
        <p>small hobby breeder of cockatiels and green cheek conures</p>
      </div>
      <div className='footer-contact'>
        <Form />
      </div>
    </div>
  );
}
