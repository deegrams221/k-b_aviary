import React from 'react';

export default function Content() {
  return (
    <div className='content'>
      <p>Small hobby breeder of cockatiels and green cheek conures</p>
      <img
        src={require('../images/placeholder-images-image_large.webp')}
        alt='K & B Aviary Logo'
        width='575px'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua
      </p>
      <div className='container'>
        <p>WHAT YOU DO</p>
        <div className='subcontainer'>
          <div className='content-one'>
            <h2>INFO TITLE</h2>
            <h3>
              Add detail here Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </h3>
          </div>
          <div className='content-two'>
            <h2>INFO TITLE</h2>
            <h3>
              Add detail here Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </h3>
          </div>
          <div className='content-three'>
            <h2>INFO TITLE</h2>
            <h3>
              Add detail here Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </h3>
          </div>
          <div className='content-four'>
            <h2>INFO TITLE</h2>
            <h3>
              Add detail here Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </h3>
          </div>
          <button>CONTACT</button>
        </div>
      </div>
      <div className='container-two'>
        <div className='one'>
          <img
            src={require('../images/placeholder-images-image_large.webp')}
            alt='K & B Aviary Logo'
            width='345px'
            height='168px'
          />
        </div>
        <div className='two'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='three'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='four'>
          <img
            src={require('../images/placeholder-images-image_large.webp')}
            alt='K & B Aviary Logo'
            width='345px'
            height='168px'
          />
        </div>

        <div className='five'>
          <img
            src={require('../images/placeholder-images-image_large.webp')}
            alt='K & B Aviary Logo'
            width='345px'
            height='168px'
          />
        </div>
        <div className='six'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='seven'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='eight'>
          <img
            src={require('../images/placeholder-images-image_large.webp')}
            alt='K & B Aviary Logo'
            width='345px'
            height='168px'
          />
        </div>
      </div>
    </div>
  );
}
