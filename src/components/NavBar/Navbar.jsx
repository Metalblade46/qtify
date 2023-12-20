import React from 'react';
import styles from './Navbar.module.css';

import SearchComponent from '../Search/SearchComponent';
import ButtonComponent from '../Button/ButtonComponent';
import Logo from '../Logo';
const Navbar = ({searchdata}) => {
  return (
    <nav className={styles.nav}>
      <a href="/"><Logo/></a>
      <SearchComponent placeholder='Search an album of your choice' searchdata={searchdata}/>
      <ButtonComponent>Give Feedback</ButtonComponent>
    </nav>
  )
}

export default Navbar