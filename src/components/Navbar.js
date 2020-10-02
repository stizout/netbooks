import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

export default function Navbar(loggedIn) {
  return (
    <nav role='navigation' aria-label='main navigation'>
      {!loggedIn ? (
        <div style={{ padding: '0 1rem' }} className='nav-container'>
          <div className='nav-left'>
            <h2>NetBooks</h2>
            <ul className='flex'>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div>
            <ul className='flex'>
              <Link to='/login'>
                <li>Item 1</li>
              </Link>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        </div>
      ) : (
        <div style={{ padding: '0 1rem', color: 'red' }} className='nav-container-login'>
          <div className='nav-left'>
            <h2>NETBOOKS</h2>
          </div>
          <div>
            <ul className='flex'>
              <Link to='/login'>
                <li
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '.5rem 1rem',
                    fontWeight: 'bold',
                    borderRadius: '3px',
                  }}
                >
                  Login
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
