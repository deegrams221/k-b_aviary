import React from 'react';
import InventoryPage from '../inventory/InventoryPage';
import ContactForm from './ContactForm';
import Links from './Links';

export default function Header() {
  return (
    <div className='header'>
      <img
        src={require('../../images/logo.jpg')}
        alt='K & B Aviary Logo'
        width='250px'
      />
      <div className='header-links'>
        <InventoryPage />
        <ContactForm />
        <Links />
      </div>
    </div>
  );
}
