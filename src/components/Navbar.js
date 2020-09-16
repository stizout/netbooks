import React from 'react';
import './css/navbar.css';

export default function Navbar() {
  return (
    <nav role='navigation' aria-label='main navigation'>
      <div style={{ padding: '0 1rem' }} className='nav-container'>
        <div className='nav-left'>
          <h2>Brand Name</h2>
          <ul className='flex'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div>
          <ul className='flex'>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
