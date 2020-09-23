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
import axios from 'axios';
import { withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const AdminLogin = ({ errors, touched, status }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='contact-btn'>
      <Button className='button' color='default' onClick={handleClickOpen}>
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
              {errors.email && touched.email && (
                <p className='error'>{errors.email}</p>
              )}
              <TextField
                margin='dense'
                required
                className='form-control'
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                placeholder='Enter Email Here'
              />
            </div>
            <div className='col'>
              {errors.password && touched.password && (
                <p className='error'>{errors.password}</p>
              )}
              <TextField
                margin='dense'
                required
                className='form-control'
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                placeholder='Enter Password Here'
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
};

const FormikAdminLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    };
  },

  // Validation Schema
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  }),

  handleSubmit(values, { setStatus }) {
    console.log(values);
    // Post Placeholder
    axios
      .post('https://reqres.in/api/users', values)
      .then((res) => {
        setStatus(res.data);
      })
      .catch((error) => console.log(error.response));
  },
})(AdminLogin);

export default FormikAdminLogin;
