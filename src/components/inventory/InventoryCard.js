import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import AdminEditCard from '../admin-pages/AdminEditCard';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function InventoryCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [editOpen, setEditOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    const deletedDoc = await firebase
      .firestore()
      .collection(`inventory/${props.type}`)
      .doc(id)
      .delete();

    setOpen(false);
  };

  return (
    <>
      <div className='cards'>
        <Card className='card' variant='outlined'>
          <CardContent>
            <CardMedia
              component='img'
              alt='inventory item'
              height='140'
              image={require('../../images/placeholder-images-image_large.webp')}
              title='inventory item'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Type of bird
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Inventory #A124
              </Typography>
            </CardContent>
          </CardContent>
          <CardActions>
            {props.type === 'admin' && <AdminEditCard />}
            {props.type === 'admin' && (
              <Button size='small' color='secondary' onClick={handleOpen}>
                Delete
              </Button>
            )}
            {/* Pop up window on Delete */}
            <Modal
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
                    onClick={() => handleDelete(props.material.id)}
                  >
                    Confirm
                  </Button>
                  <Button color='secondary' onClick={handleClose}>
                    Cancel
                  </Button>
                </div>
              </Fade>
            </Modal>
          </CardActions>
        </Card>
        <Card className='card' variant='outlined'>
          <CardContent>
            <CardMedia
              component='img'
              alt='inventory item'
              height='140'
              image={require('../../images/placeholder-images-image_large.webp')}
              title='inventory item'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Type of bird
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Inventory #A124
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
        <Card className='card' variant='outlined'>
          <CardContent>
            <CardMedia
              component='img'
              alt='inventory item'
              height='140'
              image={require('../../images/placeholder-images-image_large.webp')}
              title='inventory item'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Type of bird
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Inventory #A124
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
        <Card className='card' variant='outlined'>
          <CardContent>
            <CardMedia
              component='img'
              alt='inventory item'
              height='140'
              image={require('../../images/placeholder-images-image_large.webp')}
              title='inventory item'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Type of bird
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Inventory #A124
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
