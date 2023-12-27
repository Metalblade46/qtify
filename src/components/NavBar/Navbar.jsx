import React from 'react';
import styles from './Navbar.module.css';

import SearchComponent from '../Search/SearchComponent';
import ButtonComponent from '../Button/ButtonComponent';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
const Navbar = ({searchdata}) => {
  return (
    <nav className={styles.nav}>
      <Link to="/"><Logo/></Link>
      <SearchComponent placeholder='Search an album of your choice' searchdata={searchdata}/>
      <ButtonComponent>Give Feedback</ButtonComponent>
    </nav>
  )
}

export default Navbar;