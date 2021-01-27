import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function Footer() {
  return (
    <>
      <div id='footer'>
        <div className='footer-top'>
          <img
            src={require('../../images/logo3.jpg')}
            alt='K & B Aviary Logo'
            width='250px'
          />
          <div className='footer-info'>
            <p>
              Small hobby breeder of Cockatiels, Green-Cheeked Conures, Bourke's
              Parakeets, and Budgies
            </p>
          </div>
          <div className='footer-links'>
            <Links />
          </div>
          <div className='footer-contact-info'>
            <p>(770) 906-0347</p>
            <p>kbaviaries@gmail.com</p>
          </div>
          <div className='footer-btns'>
            <div className='footer-contact-btn'>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <p>K & B Aviary© All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
