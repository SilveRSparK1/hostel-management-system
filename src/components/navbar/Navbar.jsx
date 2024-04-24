import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
      <nav>
        <Link to="/" className='title'>HostelHub</Link>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/room">Room</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Register</NavLink>  
          </li>
        </ul>
      </nav>
  );
};