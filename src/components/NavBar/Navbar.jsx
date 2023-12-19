import React from 'react';
import styles from './Navbar.module.css';
import {ReactComponent as Logo} from '../../assets/qtifyLogo.svg'
import SearchComponent from '../Search/SearchComponent';
import ButtonComponent from '../Button/ButtonComponent';
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Logo/>
      <SearchComponent placeholder='Search an album of your choice'/>
      <ButtonComponent>Give Feedback</ButtonComponent>
    </div>
  )
}

export default Navbar