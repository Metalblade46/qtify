import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const ButtonComponent = () => {
  return (
    <Button variant="contained" sx={{borderRadius:"10px"}}>
      <Typography color='secondary' textTransform='none' fontWeight='500'>
        Give Feedback
      </Typography>
      </Button>
  )
}

export default ButtonComponent;