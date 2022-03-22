import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to = '/'>
                        Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to = '/Families'>
                        Families
          </NavLink>
        </li>
        <li>
          <NavLink exact to = '/Movies'>
                        Movies
          </NavLink>
        </li>
        <li>
          <NavLink exact to = '/Directors'>
                        Directors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}