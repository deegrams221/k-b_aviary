import React from 'react';
import InventoryPage from '../inventory/InventoryPage';
import ContactForm from './ContactForm';

export default function Content() {
  return (
    <div className='content'>
      <p>Small hobby breeder of cockatiels and green cheek conures</p>
      <img
        src={require('../../images/placeholder-images-image_large.webp')}
        alt='K & B Aviary Logo'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua
      </p>
      <div className='container'>
        <img
          src={require('../../images/logo1.jpg')}
          alt='K & B Aviary Logo'
          width='200px'
        />
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
          <div className='buttons'>
            <div className='inventory-button'>
              <InventoryPage />
            </div>
            <div className='contact-button'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className='container-two'>
        <div className='one'>
          <img
            src={require('../../images/placeholder-images-image_large.webp')}
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
            src={require('../../images/placeholder-images-image_large.webp')}
            alt='K & B Aviary Logo'
            width='345px'
            height='168px'
          />
        </div>

        <div className='five'>
          <img
            src={require('../../images/placeholder-images-image_large.webp')}
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
            src={require('../../images/placeholder-images-image_large.webp')}
            alt='K & B Aviary Logo'
            width='345px'
            height='168px'
          />
        </div>
      </div>
      <div className='container-three'>
        <h2>Video Title</h2>
        <iframe
          className='iframe'
          title='video'
          width='575'
          height='315'
          src='https://www.youtube.com/embed/tgbNymZ7vqY'
        />
        <p>
          Ad pariatur dolor occaecat cupidatat amet eiusmod laborum nostrud
          reprehenderit est. Nulla esse consectetur velit incididunt laborum sit
          incididunt dolore minim culpa. Cillum fugiat officia elit dolor
          exercitation minim officia id proident enim elit nostrud elit culpa.
          Incididunt duis dolor velit do deserunt voluptate do fugiat ullamco.
        </p>
        <p>
          Laborum laborum Lorem adipisicing amet voluptate magna adipisicing
          proident aliquip deserunt sint voluptate duis. Culpa fugiat occaecat
          esse voluptate. Nostrud minim tempor amet aliquip qui esse ad aliquip.
          Laborum adipisicing sint anim enim excepteur irure pariatur in et.
          Culpa ex aliqua officia esse aute. Sunt culpa sint aliqua dolore
          consectetur Lorem nisi ullamco mollit eiusmod et ea. Irure veniam
          velit esse velit excepteur amet et id ad irure tempor enim.
        </p>
        <p>
          Nisi tempor amet commodo in id ea elit ullamco occaecat laborum
          occaecat nisi anim. Deserunt laborum culpa culpa nisi quis adipisicing
          Lorem mollit minim. Nulla laborum deserunt pariatur nostrud. Tempor
          proident aute laborum fugiat. Ex officia aliquip qui aute sit dolor
          excepteur sit do veniam.
        </p>
      </div>
    </div>
  );
}
