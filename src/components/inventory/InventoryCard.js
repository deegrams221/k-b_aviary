import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  // Fade,
  // makeStyles,
  // Modal,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import AdminEditCard from '../admin-pages/AdminEditCard';

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// sorting
const SORT_OPTIONS = {
  TYPE_ASC: { column: 'breed', direction: 'asc' },
};

const useInventory = (sortBy = 'TYPE_ASC') => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('Inventory')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        // debugger;
        const getInventory = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInventory(getInventory);
      });
  }, [sortBy]);

  return inventory;
};

export default function InventoryCard() {
  // const classes = useStyles();
  // const [open, setOpen] = useState(false);
  // sorting
  const [sortBy] = useState('TYPE_ASC');
  const inventory = useInventory(sortBy);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // delete
  const deleteItem = (id) => {
    firebase.firestore().collection('Inventory').doc(id).delete();
    // setOpen(false);
    console.log('id: ', id);
  };

  return (
    <>
      <div className='cards'>
        {inventory.map((inventory) => (
          <Card className='card' variant='outlined' key={inventory.id}>
            <CardContent>
              <CardMedia
                component='img'
                alt='inventory item'
                height='200'
                src={
                  inventory.image ||
                  require('../../images/placeholder-images-image_large.webp')
                }
                title='inventory item'
              />
              <Typography gutterBottom variant='h5' component='h2'>
                {inventory.breed}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {inventory.description}
              </Typography>{' '}
              <br />
              <Typography gutterBottom variant='h6' component='p'>
                {inventory.inventoryNum}
              </Typography>
            </CardContent>
            <CardActions>
              {/* {user === 'admin' &&  */}
              <AdminEditCard />
              {/* } */}
              {/* {user === 'admin' && ( */}
              {/* <Button size='small' color='secondary' onClick={handleOpen}> */}
              <Button
                size='small'
                color='secondary'
                onClick={() => deleteItem(inventory.id)}
              >
                Delete
              </Button>
              {/* )} */}
              {/* Pop up window on Delete */}
              {/* <Modal
                className={classes.modal}
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                BackdropComponent={Backdrop}
                open={open}
                onClose={handleClose}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2 id='transition-modal-title'>Delete this material?</h2>
                    <p id='transition-modal-description'>
                      This action cannot be reversed.
                    </p>
                    <Button
                      className='confirmDelete'
                      color='primary'
                      onClick={() => deleteItem(inventory.id)}
                    >
                      Confirm
                    </Button>
                    <Button color='secondary' onClick={handleClose}>
                      Cancel
                    </Button>
                  </div>
                </Fade>
              </Modal> */}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
