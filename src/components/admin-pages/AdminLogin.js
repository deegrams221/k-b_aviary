import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import React from 'react';

export default function AdminLogin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='contact-btn'>
      <Button
        className='button'
        color='default'
        // variant='contained'
        onClick={handleClickOpen}
      >
        ADMIN LOGIN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <form noValidate>
          <div className='form-group'>
            <div className='form-row'>
              <DialogTitle id='form-dialog-title'>ADMIN LOGIN</DialogTitle>
              <DialogContent>
                <DialogContentText>*ADMIN ONLY.</DialogContentText>
                <DialogContentText>
                  GO BACK IF YOU ARE NOT ADMIN.
                </DialogContentText>
              </DialogContent>
            </div>
            <div className='col'>
              <TextField
                // variant='outlined'
                margin='dense'
                required
                // fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
            </div>
            <div className='col'>
              <TextField
                // variant='outlined'
                margin='dense'
                required
                // fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </div>
            <div className='col'>
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
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
                Login
              </Button>
            </DialogActions>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
