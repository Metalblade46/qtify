import { Box } from '@mui/material'
import React from 'react'
import {InputBase, Divider, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
        <Box 
        sx={{
            width: '50%',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'center',
            border : '1px solid '
          }}
        >
          <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search for a song of your choice"
        
      />
      <Divider sx={{ borderLeft: '1px solid' }}  orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      <SearchIcon />
      </IconButton>
        </Box>
    </div>
  )
}

export default SearchComponent