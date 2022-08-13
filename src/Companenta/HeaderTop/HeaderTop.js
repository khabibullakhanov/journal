import React from 'react';
import "./HeaderTop.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';



export function HeaderTop() {


  return (
    // <Box sx={{ flexGrow: 1, boxShadow: 'none' }} 
    // >
      <AppBar position="static" sx={{backgroundColor: "none", boxShadow: "none" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <span style={{fontWeight: '600', fontSize: '22px', letterSpacing: '2px'}}>Online Journal Teacher: Muhammadxon</span>
          </Typography>
         
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={324}
            aria-haspopup="true"
            color="inherit"
          >

            <AccountCircle className='user-icon' />
          </IconButton>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
