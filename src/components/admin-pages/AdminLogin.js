import {
  Button,
  Checkbox,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../App';
import firebase from '../../firebase';

const AdminLogin = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setErrors] = useState('');
  const Auth = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            if (res.user) Auth.setLoggedIn(true);
            history.push('/admin');
          })
          .catch((e) => {
            setErrors(e.message);
          });
      });
  };

  const signInWithGoogle = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((res) => {
            if (res.user) Auth.setLoggedIn(true);
            history.push('/admin');
          })
          .catch((e) => {
            setErrors(e.message);
          });
      });
  };

  return (
    <>
      <div className='contact-btn'>
        <form onSubmit={(e) => handleForm(e)}>
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
                margin='dense'
                required
                className='form-control'
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                placeholder='Enter Email Here'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='col'>
              <TextField
                margin='dense'
                required
                className='form-control'
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                value={password}
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
            <div className='col'>
              <Button
                color='default'
                variant='outlined'
                type='submit'
                className='btn btn-lg btn-dark btn-block'
              >
                Login
              </Button>
              <br />
              <Button
                onClick={() => signInWithGoogle()}
                color='default'
                variant='outlined'
                className='btn btn-lg btn-dark btn-block'
                type='button'
              >
                Login With Google
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(AdminLogin);
