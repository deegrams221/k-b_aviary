import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import Logo from '../../images/logo1.jpg';

export default function ContactForm() {
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
        <Button
          className='button'
          color='default'
          // variant='contained'
          onClick={handleClickOpen}
        >
          CONTACT US
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <form
            action='https://formsubmit.co/kbaviaries@gmail.com'
            method='POST'
            autoComplete='off'
          >
            <div className='form-group'>
              <div className='form-row'>
                <img src={Logo} alt='KB Aviary Logo' width={200} />
                <DialogTitle id='form-dialog-title'>CONTACT US</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Call us at (770) 906-0347
                  </DialogContentText>
                  <DialogContentText>OR</DialogContentText>
                  <DialogContentText>
                    Enter your name, email, and a quick message.
                  </DialogContentText>
                  <DialogContentText>
                    We will contact you shortly.
                  </DialogContentText>
                </DialogContent>
                <div className='col'>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    type='text'
                    name='name'
                    className='form-control'
                    label='Name'
                    placeholder='Enter Name Here'
                    required
                  />
                </div>
                <div className='col'>
                  <TextField
                    margin='dense'
                    id='email'
                    className='form-control'
                    name='email'
                    label='Email Address'
                    type='email'
                    placeholder='Enter Valid Email Here'
                    required
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <TextField
                margin='dense'
                id='message'
                className='form-control'
                name='message'
                label='Message'
                type='text'
                placeholder='Enter Message Here'
                required
              />
            </div>
            <DialogActions>
              <Button onClick={handleClose} color='default'>
                Cancel
              </Button>
              <Button
                color='default'
                type='submit'
                value='Send Message'
                className='btn btn-lg btn-dark btn-block'
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </>
  );
}
