import { Button, Dialog } from '@material-ui/core';
import React, { useState } from 'react';
import ContactForm from '../landingpage/ContactForm';
import InventoryCard from './InventoryCard';

export default function InventoryPage(props) {
  // const [item, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='inventory-page'>
        <Button className='button' color='default' onClick={handleClickOpen}>
          INVENTORY
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <h1>Inventory</h1>
          <h2>
            Below is a list of the birds we currently have available for
            purchase. If you are interested in any of these birds, please send a
            message with the inventory number.
          </h2>

          <ContactForm />
          <div className='content-cards'>
            <InventoryCard />
          </div>
          <ContactForm />
        </Dialog>
      </div>
    </>
  );
}
