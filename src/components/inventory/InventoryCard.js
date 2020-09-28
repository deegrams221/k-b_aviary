import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

export default function InventoryCard() {
  return (
    <>
      <div className='cards'>
        <Card className='inventory-cards'>
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
        <Card className='inventory-cards'>
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
        <Card className='inventory-cards'>
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
        <Card className='inventory-cards'>
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
