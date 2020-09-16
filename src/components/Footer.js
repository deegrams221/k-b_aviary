import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='footer'>
      <img
        src={require('../images/logo.jpg')}
        alt='K & B Aviary Logo'
        width='250px'
      />
      <div className='footer-links'>
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
      <div className='footer-info'>
        <p>
          Incididunt ea aute esse nulla. Labore nostrud id anim esse culpa
          proident culpa incididunt duis ex aliquip ullamco. Nulla enim sit qui
          incididunt irure commodo laborum proident nostrud.{' '}
        </p>
      </div>
      <div className='footer-contact'>
        {/* <p>Get in Touch</p> */}
        <div className='contact-btn'>
          <Button className='button' color='default' onClick={handleClickOpen}>
            Get in Touch
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
          >
            <form
              action='https://formsubmit.co/deegrams221@gmail.com'
              method='POST'
              autoComplete='off'
            >
              <div className='form-group'>
                <div className='form-row'>
                  <DialogTitle id='form-dialog-title'>CONTACT US</DialogTitle>
                  <DialogContent>
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
                      placeholder='Enter a Valid Email Here'
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
                  onClick={handleClose}
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
      </div>
    </div>
  );
}
