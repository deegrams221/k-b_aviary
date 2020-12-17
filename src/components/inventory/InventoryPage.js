import { Button, Dialog, DialogActions } from '@material-ui/core';
import React, { useState } from 'react';
import ContactForm from '../landingpage/ContactForm';

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
        >
          <h1>Inventory</h1>
          <h2>Coming Soon!</h2>
          <DialogActions>
            <Button onClick={handleClose} color='default'>
              Cancel
            </Button>
            <ContactForm />
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
