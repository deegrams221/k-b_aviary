import {
  Button,
  Checkbox,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import axios from 'axios';
import { withFormik } from 'formik';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';

const AdminLogin = ({ errors, touched, status, props }) => {
  const { from } = { from: { pathname: '/' } };
  console.log(from);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <div className='contact-btn'>
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
            <div className='col'>
              <Button
                onClick={login}
                color='default'
                variant='outlined'
                type='submit'
                className='btn btn-lg btn-dark btn-block'
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
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
      .post('', values)
      .then((res) => {
        setStatus(res.data);
      })
      .catch((error) => console.log(error.response));
  },
})(AdminLogin);

export default FormikAdminLogin;

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const signInWithEmailAndPasswordHandler = (event, email, password) => {
//     event.preventDefault();
//   };

//   const onChangeHandler = (event) => {
//     const { name, value } = event.currentTarget;

//     if (name === 'userEmail') {
//       setEmail(value);
//     } else if (name === 'userPassword') {
//       setPassword(value);
//     }
//   };

//   return (
//     <div className='mt-8'>
//       <h1 className='text-3xl mb-2 text-center font-bold'>Sign In</h1>
//       <div className='border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8'>
//         {error !== null && (
//           <div className='py-4 bg-red-600 w-full text-white text-center mb-3'>
//             {error}
//           </div>
//         )}
//         <form className=''>
//           <label htmlFor='userEmail' className='block'>
//             Email:
//           </label>
//           <input
//             type='email'
//             className='my-1 p-1 w-full'
//             name='userEmail'
//             value={email}
//             placeholder='E.g: faruq123@gmail.com'
//             id='userEmail'
//             onChange={(event) => onChangeHandler(event)}
//           />
//           <label htmlFor='userPassword' className='block'>
//             Password:
//           </label>
//           <input
//             type='password'
//             className='mt-1 mb-3 p-1 w-full'
//             name='userPassword'
//             value={password}
//             placeholder='Your Password'
//             id='userPassword'
//             onChange={(event) => onChangeHandler(event)}
//           />
//           <button
//             className='bg-green-400 hover:bg-green-500 w-full py-2 text-white'
//             onClick={(event) => {
//               signInWithEmailAndPasswordHandler(event, email, password);
//             }}
//           >
//             Sign in
//           </button>
//         </form>
//         <p className='text-center my-3'>or</p>
//         <button className='bg-red-500 hover:bg-red-600 w-full py-2 text-white'>
//           Sign in with Google
//         </button>
//       </div>
//     </div>
//   );
// };
// export default AdminLogin;
