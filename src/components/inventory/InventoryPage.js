import React from 'react';

export default function InventoryPage(props) {
  const bird = props.inventory.find(
    (bird) => props.match.params.id === `${bird.id}`
  );

  return (
    <div>
      <div className='inventory-page'>
        <h1>{bird.name}</h1>
        <h2>({bird.nickname})</h2>
        <img src={} />
      </div>
    </div>
  );
}
