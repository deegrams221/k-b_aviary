import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';

export default function AdminEditCard() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='contact-btn'>
        <Button className='button' color='default' onClick={handleClickOpen}>
          EDIT
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <form>
            <div className='form-group'>
              <div className='form-row'>
                <DialogTitle id='form-dialog-title'>EDIT ITEM</DialogTitle>
                <div className='col'>
                  <TextField
                    name='upload-photo'
                    className='form-control'
                    margin='dense'
                    type='file'
                  />
                </div>
                <div className='col'>
                  <TextField
                    margin='dense'
                    id='breed'
                    type='text'
                    name='breed'
                    className='form-control'
                    label='Breed'
                    placeholder='Enter Breed Here'
                  />
                </div>
                <div className='col'>
                  <TextField
                    margin='dense'
                    id='inventory-number'
                    className='form-control'
                    name='inventory-number'
                    label='Inventory Number'
                    type='text'
                    placeholder='Enter Inventory Number Here'
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <TextField
                margin='dense'
                id='descrpiction'
                className='form-control'
                name='descrpiction'
                label='Descrpiction'
                type='text'
                placeholder='Enter Descrpiction Here'
              />
            </div>
            <DialogActions>
              <Button
                onClick={handleClose}
                color='primary'
                type='submit'
                className='btn btn-lg btn-dark btn-block'
              >
                Update
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
