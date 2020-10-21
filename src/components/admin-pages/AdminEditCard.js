import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import firebase from '../../firebase';
import { useStorage } from '../hooks/useStorage';

export default function AdminEditCard() {
  const [open, setOpen] = useState(false);
  const [breed, setBreed] = useState('');
  const [inventoryNum, setInventoryNum] = useState('');
  const [description, setDescription] = useState('');
  const [, setImgURL] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  // image upload
  const handleChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };

  // Getting the progress and url from the hook
  const { progress, url } = useStorage(file);

  // open the form
  const handleClickOpen = () => {
    setOpen(true);
  };

  // close the form
  const handleClose = () => {
    setOpen(false);
  };

  // submit the form
  const onSubmit = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection('Inventory')
      .add({ breed, inventoryNum, description, image: url })
      .then(() => {
        setImgURL('');
        setBreed('');
        setInventoryNum('');
        setDescription('');
      });
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
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <div className='form-row'>
                <DialogTitle id='form-dialog-title'>EDIT</DialogTitle>
                <div className='col'>
                  <TextField
                    name='upload-photo'
                    className='form-control'
                    margin='dense'
                    type='file'
                    onChange={handleChange}
                  />
                </div>
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
                    onChange={(e) => setBreed(e.currentTarget.value)}
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
                    value={inventoryNum}
                    onChange={(e) => setInventoryNum(e.currentTarget.value)}
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
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </div>
            <DialogActions>
              <Button
                onClick={handleClose}
                color='primary'
                type='submit'
                className='btn btn-lg btn-dark btn-block'
              >
                Submit
              </Button>
              <Button onClick={handleClose} color='secondary'>
                Cancel
              </Button>
            </DialogActions>
          </form>
          {error && <p>{error}</p>}
          {file && <p>{progress}% uploaded</p>}
          {url && <img src={url} alt='source url' width='200'></img>}
        </Dialog>
      </div>
    </>
  );
}
