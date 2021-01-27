import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import firebase from '../../firebase';

export default function AdminEditCard() {
  const [open, setOpen] = useState(false);
  const [inventory] = useState('');
  const [update, setUpdate] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');

  // open update form
  const openUpdateDialog = (inventory) => {
    setOpen(true);
    setToUpdateId(inventory.id);
    setUpdate(inventory.breed, inventory.inventoryNum, inventory.description);
  };

  // save update
  const updateInventory = () => {
    firebase.firestore().collection('Inventory').doc(toUpdateId).update({
      inventory: update,
    });
    setOpen(false);
  };

  // close the form
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='contact-btn'>
        <Button
          className='button'
          color='default'
          onClick={openUpdateDialog(inventory)}
        >
          UPDATE
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <form>
            <div className='form-group'>
              <div className='form-row'>
                <DialogTitle id='form-dialog-title'>
                  UPDATE {inventory.inventoryNum}
                </DialogTitle>
                <div className='col'>
                  <TextField
                    variant='outlined'
                    margin='dense'
                    id='type'
                    type='text'
                    name='type'
                    className='form-control'
                    label='Breed'
                    placeholder='Enter Breed Here'
                    value={update}
                    onChange={(event) => setUpdate(event.target.value)}
                  />
                </div>
                <div className='col'>
                  <TextField
                    margin='dense'
                    id='inventoryNum'
                    className='form-control'
                    name='inventoryNum'
                    label='Inventory Number'
                    type='text'
                    placeholder='Enter Inventory Number Here'
                    value={update}
                    onChange={(event) => setUpdate(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <TextField
                margin='dense'
                id='description'
                className='form-control'
                name='description'
                label='Description'
                type='text'
                placeholder='Enter Description Here'
                value={update}
                onChange={(event) => setUpdate(event.target.value)}
              />
            </div>
            <DialogActions>
              <Button
                onClick={updateInventory}
                color='primary'
                type='submit'
                className='btn btn-lg btn-dark btn-block'
              >
                Save
              </Button>
              <Button onClick={handleClose} color='secondary'>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </>
  );
}
