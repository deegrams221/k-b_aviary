import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import { useStorage } from '../hooks/useStorage';

export default function AdminEditCard(props) {
  const [editItem, setEditItem] = useState({
    image: '',
    breed: '',
    description: '',
    inventoryNum: '',
  });
  const [, setEditing] = useState([]);
  // image upload
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleEditChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.breed)) {
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

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('Inventory')
      .onSnapshot((snapshot) => {
        let inventoryItems = snapshot.docs.map((doc) => {
          return doc.data().navName;
        });
        setEditing(inventoryItems);
      });

    setEditItem({
      image: props.inventory.image || '',
      breed: props.inventory.breed || '',
      description: props.inventory.description || '',
      inventoryNum: props.inventory.inventoryNum || '',
    });
    return unsubscribe;
  }, []);

  // submit the form
  const onSubmit = (e) => {
    e.preventDefault();
    const response = firebase
      .firestore()
      .collection(`Inventory/${editItem.breed}/modules`)
      .doc(props.inventory.id)
      .update(editItem);
    setTimeout(() => {
      props.closeWindow();
    }, 1000);
  };

  const onChange = (e) => {
    setEditItem({ ...editItem, [e.target.breed]: e.target.value });
  };

  // open the form
  const handleClickOpen = () => {
    setOpen(true);
  };

  // close the form
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
                    value={editItem.image}
                    onChange={(handleEditChange, onChange)}
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
                    value={editItem.breed}
                    onChange={onChange}
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
                    value={editItem.inventoryNum}
                    onChange={onChange}
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
                value={editItem.description}
                onChange={onChange}
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
              <Button
                onClick={(() => setEditing(false), handleClose)}
                color='secondary'
              >
                Cancel
              </Button>
            </DialogActions>
          </form>
          {error && <p>{error}</p>}
          {file && <p>{progress}% uploaded</p>}
          {url && (
            <img src={url} alt='source url' width='200' height='200'></img>
          )}
        </Dialog>
      </div>
    </>
  );
}
