import { Box } from '@mui/material'
import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/Search icon.svg'
import styles from './Search.module.css'

const SearchComponent = ({placeholder}) => {
  const handleSubmit=(e)=>{
    e.preventDefault(); 
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} required placeholder={placeholder}/>
      <button className={styles.button}><SearchIcon className={styles.icon}/></button>
    </form>
  )
}

export default SearchComponent