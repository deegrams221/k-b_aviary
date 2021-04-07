import { Button, Dialog, DialogActions } from '@material-ui/core';
import React, { useState } from 'react';
import Logo from '../../images/logo1.jpg';
import ContactForm from '../landingpage/ContactForm';
import InventoryCard from './InventoryCard';

export default function InventoryPage() {
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
          fullWidth={true}
          className='dialog'
        >
          <div className='inventory-content'>
            <img src={Logo} alt='KB Aviary Logo' width={200} />
            <h1>Inventory</h1>
            <h2>Currently Out of Stock</h2>
            <InventoryCard />
            <DialogActions>
              <Button onClick={handleClose} color='default'>
                Cancel
              </Button>
              <ContactForm />
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </>
  );
}
