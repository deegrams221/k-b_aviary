// import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React from 'react';
// import Icon from 'react-fa';
import ContactForm from './ContactForm';
import Vendors from './Vendors';

export default function Content() {
  return (
    <>
      <div id='content'>
        <h1>Small Hobby Bird Breeder in Lawrenceville, Georgia</h1>
        <h2>
          Cockatiels, Green Cheeked Conures, Bourke's Parakeets, and Budgies
        </h2>
        <div className='carousel'>
          <Carousel
            clickToChange
            dots
            infinite
            centered
            slidesPerPage={2}
            breakpoints={{
              640: { slidesPerPage: 1 },
            }}
          >
            <img
              src={require('../../images/cockatiel_babies.jpg')}
              alt='Four baby Cockatiels'
              loading='lazy'
              height='300px'
            />
            <img
              src={require('../../images/baby_bird.jpg')}
              alt='Baby Conure being held'
              loading='lazy'
              height='300px'
            />
            <img
              src={require('../../images/adult_lutino_cockatiel.jpg')}
              alt='Adult Lutino Cockatiel'
              loading='lazy'
              height='300px'
            />
            <img
              src={require('../../images/budgie.jpg')}
              alt='Budgie sitting on a perch'
              loading='lazy'
              height='300px'
            />
            <img
              src={require('../../images/cockatiel_pair2.jpg')}
              alt='Two Adult Cockatiels'
              loading='lazy'
              height='300px'
            />
            <img
              src={require('../../images/opaline_budgie.jpg')}
              alt='Opaline Budgie sitting on a perch'
              loading='lazy'
              height='300px'
            />
          </Carousel>
        </div>
        <div className='about'>
          <p>
            We are a small hobby breeder based out of Lawrenceville, GA. We
            breed Cockatiels, Green Cheeked Conures, Bourke's Parakeets, and
            Budgies. We love helping individuals and families find the right
            type of pet bird for them!
            <br /> <br />
            We started raising and breeding birds a few years ago. We do our
            best to make sure our birds are healthy and strong. Birds are so
            much fun to raise because they are social creatures. They can greet
            you good morning with songs and all those cute bird sounds. They can
            also welcome you home and relieve your stress with their songs at
            night.
          </p>
        </div>
        <div className='container'>
          <img
            src={require('../../images/logo1.jpg')}
            alt='K & B Aviary Logo'
            width='200px'
          />
          <div className='subcontainer'>
            <div className='content-one'>
              <h2>COCKATIELS</h2>
              <h3>
                Considered the most popular of the parrot family, they are
                outgoing and they love to climb and play!
              </h3>
            </div>
            <div className='content-two'>
              <h2>CONURES</h2>
              <h3>
                Great personalities and can be outgoing and comical, but they
                can also be a little shy.
              </h3>
            </div>
            <div className='content-three'>
              <h2>BUDGIES</h2>
              <h3>
                Known to have a big personality! They are small but full of
                character.
              </h3>
            </div>
            <div className='content-four'>
              <h2>PARAKEETS</h2>
              <h3>
                A great introductory bird for new bird owners! They have a calm
                demeanor.
              </h3>
            </div>
            <div className='buttons'>
              <div className='contact-button'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className='container-two types-of-birds'>
          <div className='top'>
            <div className='one'>
              <img
                src={require('../../images/bourke_parakeets.jpg')}
                alt='Six Bourke parakeets in a cage'
                width='345px'
                height='168px'
              />
            </div>
            <div className='two'>
              <p>
                <b>Bourke's Parakeets</b> are a great introductory bird for new
                bird owners; they have a calm demeanor and they keep themselves
                entertained. They are ideal for apartment living because they
                are quiet. They are excellent partners for finches and
                cockatiels as well as other Bourke's parakeets. Keep gentle
                Bourke's parakeets away from larger, aggressive birds.
              </p>
            </div>
          </div>
          <div className='middle-top'>
            <div className='three'>
              <p>
                <b>Opaline Budgies</b> are the most common variant of budgie.
                Budgies are often referred to as the "most popular bird" because
                there are more budgies in the world than any other type of pet
                bird. Budgies are known to have a big personality too; they’re
                small but full of character, cramming all the charisma of a
                parrot into a package not much bigger than a canary.
              </p>
            </div>
            <div className='four'>
              <img
                src={require('../../images/budgies.jpg')}
                alt='One Opaline Budgie and one Crested Budgie sitting on a perch'
                width='345px'
                height='168px'
              />
            </div>
          </div>
          <div className='middle-bottom'>
            <div className='five'>
              <img
                src={require('../../images/conures.jpg')}
                alt='Group of four Green Cheeked Conures resting on a perch'
                width='340px'
                height='168px'
              />
            </div>
            <div className='six'>
              <p>
                <b>Green Cheeked Conures</b> have great personalities and can be
                outgoing and comical, but they can also be a little shy. They
                love to play and will enjoy a good rotation of toys and a
                spacious cage to run around. Green Cheeked Conures are also one
                of the smallest conures; averaging around 10 inches long.
              </p>
            </div>
          </div>
          <div className='bottom'>
            <div className='seven'>
              <p>
                <b>Cinnamon Cockatiels</b> are unique in that they are a strain
                developed by breeders and are not found in the wild. Grey
                cockatiels are mostly what is seen in the wild and they are
                found all over most of Australia. Cockatiels are part of the
                parrot family, and are considered the most popular of the parrot
                family. They are closely related to the Cockatoos too.
              </p>
            </div>
            <div className='eight'>
              <img
                src={require('../../images/cinnamon_cockatiel_full.jpg')}
                alt='Full grown Cinnamon Cockatiel'
                width='345px'
                height='168px'
              />
            </div>
          </div>
        </div>
        <div className='container-three video'>
          {/* <h2>Baby Cockatiels</h2>
          <iframe
            className='iframe'
            title='Baby Cockatiels video'
            width='575'
            height='315'
            src='https://www.youtube.com/embed/tgbNymZ7vqY'
          /> */}
          <p>
            <b>Did you know that birds are really smart?</b>
          </p>
          <p>
            Studies have shown that birds have great problem-solving skills and
            cognitive skills that prove their high-level of intellect. They have
            excellent navigation skills and migrate thousands of miles twice a
            year. <br />
            <br />
            Because they are smart, training and taming birds is easy. Among
            those bird breeds that are classified intelligent and easy to train
            are cockatiels, parrots, and cockatoos.
          </p>
        </div>
        <div className='container-four vendors'>
          <p>Prefered Vendors</p>
          <Vendors />
        </div>
      </div>
    </>
  );
}
