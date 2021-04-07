import React from 'react';
import { Link } from 'react-router-dom';
import AdminInventoryCard from './AdminInventoryCard';
import AdminInventoryForm from './AdminInventoryForm';

export default function AdminInventoryPage() {
  return (
    <>
      <div className='inventory-page'>
        <h1>Inventory</h1>
        <Link to='/'>Logout</Link>
        <AdminInventoryForm />
        <AdminInventoryCard />
      </div>
    </>
  );
}
