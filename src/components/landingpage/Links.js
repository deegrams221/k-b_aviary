import React from 'react';

export default function Links() {
  return (
    <div className='links'>
      {/* Twitter */}
      <a
        className='twitter'
        target='_blank'
        rel='noopener noreferrer'
        title='follow me on Twitter'
        href='https://www.twitter.com/kbaviary'
      >
        <img
          alt='follow me on Twitter'
          src='https://c866088.ssl.cf3.rackcdn.com/assets/twitter30x30.png'
        />
      </a>
      {/* Instagram */}
      <a
        className='instagram'
        target='_blank'
        rel='noopener noreferrer'
        title='follow me on instagram'
        href='https://www.instagram.com/barronkristina/'
      >
        <img
          alt='follow me on instagram'
          src='https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png'
        />
      </a>
      {/* Google */}
      <a
        className='google-business'
        target='_blank'
        rel='noopener noreferrer'
        title='follow me on google-business'
        href='https://g.page/r/Cea2PdAcWHafEBA'
      >
        <img
          alt='follow me on google-business'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUwKOKGJv8nkQkOgnGJAnKjvv_KmVzSKqWQ&usqp=CAU'
        />
      </a>
    </div>
  );
}
