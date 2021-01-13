import React from 'react';
import InventoryCard from '../inventory/InventoryCard';
import AdminInventoryForm from './AdminInventoryForm';

export default function AdminInventoryPage() {
  return (
    <>
      <div className='inventory-page'>
        <h1>Inventory</h1>
        <AdminInventoryForm />
        <InventoryCard />
      </div>
    </>
  );
}
