import React from 'react'
import { Typography } from '@mui/material'
import Link from "@material-ui/core/Link";
// import Item from '@material-ui/core/Item';
export default function Footer() {
  return (
    <div className='typo'>
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        IMAG
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
     
      <div> 南京理工大学  Contact Us</div>
    </Typography>
    
    </div>
  )
}
